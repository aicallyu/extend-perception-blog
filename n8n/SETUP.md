# Extend Perception Newsletter System - Setup Guide

Dieses Dokument erklärt, wie du das Newsletter-System für Extend Perception einrichtest.

## Architektur

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Frontend  │────▶│  n8n        │────▶│   Google    │────▶│   Resend    │
│   (React)   │     │  Webhook    │     │   Sheets    │     │   E-Mail    │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

## Voraussetzungen

- n8n selbst gehostet (bereits vorhanden ✅)
- Google Account (für Google Sheets)
- Resend Account (kostenlos: 3000 E-Mails/Monat)

---

## Schritt 1: Google Sheets einrichten

### 1.1 Neues Spreadsheet erstellen

1. Gehe zu [Google Sheets](https://sheets.google.com)
2. Erstelle ein neues Spreadsheet mit dem Namen: **Extend Perception Subscribers**
3. Benenne das erste Sheet: **Subscribers**
4. Erstelle folgende Spalten in Zeile 1:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Name | Email | Language | Source | Subscribed At | Status |

### 1.2 Sheet ID kopieren

Die Sheet ID findest du in der URL:
```
https://docs.google.com/spreadsheets/d/[DIESE_ID_KOPIEREN]/edit
```

---

## Schritt 2: Resend einrichten

### 2.1 Account erstellen

1. Gehe zu [resend.com](https://resend.com)
2. Erstelle einen kostenlosen Account
3. Verifiziere deine Domain (oder nutze die Test-Domain)

### 2.2 API Key erstellen

1. Gehe zu **API Keys** → **Create API Key**
2. Name: `Extend Perception Newsletter`
3. Permission: `Sending access`
4. Kopiere den API Key (wird nur einmal angezeigt!)

---

## Schritt 3: n8n Workflow importieren

### 3.1 Workflow importieren

1. Öffne dein n8n Dashboard
2. Gehe zu **Workflows** → **Import from File**
3. Wähle die Datei: `n8n/xp-newsletter-workflow.json`

### 3.2 Credentials einrichten

#### Google Sheets Credentials:

1. In n8n: **Settings** → **Credentials** → **Add Credential**
2. Wähle: **Google Sheets OAuth2 API**
3. Folge dem OAuth-Flow um deinen Google Account zu verbinden
4. Gehe zurück zum Workflow und wähle diese Credentials im "Save to Google Sheets" Node

#### Resend Credentials:

1. In n8n: **Settings** → **Credentials** → **Add Credential**
2. Wähle: **Resend API**
3. Füge deinen API Key ein
4. Gehe zurück zum Workflow und wähle diese Credentials im "Send Welcome Email" Node

### 3.3 Google Sheet ID eintragen

1. Öffne den "Save to Google Sheets" Node
2. Ersetze `YOUR_GOOGLE_SHEET_ID` mit deiner echten Sheet ID

### 3.4 Resend Absender-E-Mail eintragen

1. Öffne den "Send Welcome Email" Node
2. Setze die "From Email" auf deine verifizierte Domain (z.B. `hello@extendperception.com`)

### 3.5 Workflow aktivieren

1. Klicke auf **Save**
2. Klicke auf **Active** (Toggle oben rechts)
3. Kopiere die Webhook URL (wird angezeigt nach dem Aktivieren)

---

## Schritt 4: Frontend konfigurieren

### 4.1 .env Datei aktualisieren

Öffne `/home/user/Unblind-v1/.env` und ersetze die Platzhalter-URL:

```env
# Newsletter subscription webhook URL (n8n)
VITE_SUBSCRIBE_WEBHOOK_URL=https://dein-n8n-server.com/webhook/xp-subscribe
```

### 4.2 Neu builden und deployen

```bash
npm run build
```

---

## Schritt 5: Testen

1. Öffne deine Extend Perception Website
2. Scrolle zum Subscribe-Formular
3. Gib einen Test-Namen und E-Mail ein
4. Klicke auf "Subscribe"
5. Überprüfe:
   - Google Sheet: Neuer Eintrag sollte erscheinen
   - E-Mail: Willkommens-E-Mail sollte ankommen

---

## Bonus: Newsletter bei neuem Artikel senden

Um Abonnenten zu benachrichtigen, wenn ein neuer Artikel veröffentlicht wird:

### Option A: Manueller Workflow

1. Erstelle einen neuen n8n Workflow
2. Trigger: **Manual Trigger** oder **Schedule Trigger**
3. Node: **Google Sheets** → Read all subscribers
4. Node: **Loop** → Für jeden Subscriber
5. Node: **Resend** → Newsletter E-Mail senden

### Option B: Webhook bei Deploy

1. Füge einen Webhook zu deinem CI/CD hinzu
2. Bei jedem Deploy wird n8n getriggert
3. n8n holt die neuesten Artikel und sendet Newsletter

---

## Fehlerbehebung

### "CORS Error" im Browser

Die Webhook Response Headers sind bereits konfiguriert mit:
```
Access-Control-Allow-Origin: *
```

Falls es trotzdem Probleme gibt, prüfe deine n8n CORS-Einstellungen.

### "Subscription failed" im Frontend

1. Prüfe die n8n Execution Logs
2. Stelle sicher, dass alle Credentials korrekt sind
3. Teste den Webhook mit curl:

```bash
curl -X POST https://dein-n8n-server.com/webhook/xp-subscribe \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","language":"en","source":"test","timestamp":"2024-01-01T00:00:00.000Z"}'
```

### E-Mail kommt nicht an

1. Prüfe den Resend Dashboard für Fehler
2. Stelle sicher, dass deine Domain verifiziert ist
3. Prüfe den Spam-Ordner

---

## Dateien

```
n8n/
├── xp-newsletter-workflow.json  # Importierbarer n8n Workflow
└── SETUP.md                          # Diese Anleitung
```

---

## Support

Bei Fragen oder Problemen:
- n8n Dokumentation: https://docs.n8n.io
- Resend Dokumentation: https://resend.com/docs
- Google Sheets API: https://developers.google.com/sheets/api

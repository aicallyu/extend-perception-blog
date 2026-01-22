# Repository Audit Report - UNBLIND-V1

**Audit Date:** 2026-01-22
**Auditor:** Claude Code (Opus 4.5)

---

## Executive Summary

This audit identified **50+ issues** across the codebase:
- **2 Critical** (Build system broken, ESLint config missing)
- **19 High Priority** (Memory leaks, race conditions, security vulnerabilities, accessibility)
- **12 Medium** (Code quality, configuration)
- **17+ Low** (Best practices, minor improvements)

---

## Critical Issues

### 1. Build System Broken
**Status:** CRITICAL
**Impact:** Cannot build or deploy the application

The TypeScript build fails completely due to missing `node_modules`:
```
npm run build → Exit code 1
error TS2307: Cannot find module 'react' or its corresponding type declarations
```

**Solution:** Run `npm install` to install dependencies.

### 2. ESLint Configuration Missing
**Status:** CRITICAL
**File:** `eslint.config.js` (MISSING)

ESLint 9.13.0 is specified in `package.json:26` but the required flat config file doesn't exist.

**Error:**
```
ESLint couldn't find an eslint.config.(js|mjs|cjs) file.
```

**Solution:** Create `eslint.config.js` with the new flat config format.

---

## Security Vulnerabilities

### 1. Vulnerable Dependencies (MODERATE)
**File:** `package-lock.json`

```
npm audit report:
2 moderate severity vulnerabilities (esbuild <=0.24.2)
GHSA-67mh-4wv8-2f99: esbuild enables any website to send requests to dev server
```

**Solution:** Run `npm audit fix --force` (note: installs vite 7.x breaking change)

### 2. Webhook URL Exposed in Frontend (HIGH)
**Files:**
- `src/components/sections/Subscribe.tsx:9`
- `src/pages/ArticlePage.tsx:11`

```typescript
const WEBHOOK_URL = import.meta.env.VITE_SUBSCRIBE_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/unblind-subscribe'
```

**Issues:**
- Webhook URL visible in compiled frontend code and network requests
- No authentication between frontend and webhook
- Susceptible to spam/abuse attacks

**Solution:** Move webhook handling to a backend API with proper authentication.

### 3. Missing Content Security Policy (MEDIUM)
**File:** `index.html`

No CSP headers defined to restrict script sources and prevent XSS attacks.

**Solution:** Add `<meta http-equiv="Content-Security-Policy">` tag.

### 4. Console.error in Production (LOW)
**File:** `src/components/article/HighlightBox.tsx:18`

```typescript
console.error('Failed to copy:', err)
```

### 5. Browser alert() Usage (LOW)
**File:** `src/components/article/HighlightBox.tsx:32,36`

Using `alert()` for user feedback instead of toast notifications.

---

## React Code Bugs

### Memory Leaks - setTimeout Without Cleanup

| File | Line | Issue |
|------|------|-------|
| `Subscribe.tsx` | 69, 76 | setTimeout not cleared on unmount |
| `HighlightBox.tsx` | 16 | setTimeout without cleanup |
| `ArticlePage.tsx` | 94, 100 | setTimeout without cleanup |
| `Library.tsx` | 78-90 | setInterval in startAutoPlay |

**Example fix:**
```typescript
useEffect(() => {
  const timeoutId = setTimeout(() => setStatus('idle'), 5000)
  return () => clearTimeout(timeoutId)
}, [])
```

### GSAP ScrollTrigger Cleanup Missing

**9 components affected:**
1. `src/components/sections/Posts.tsx` (lines 14-53)
2. `src/components/sections/Topics.tsx` (lines 22-75)
3. `src/components/sections/Sequence.tsx` (lines 19-74)
4. `src/components/sections/Stats.tsx` (lines 21-70)
5. `src/components/sections/Subscribe.tsx` (lines 20-40)
6. `src/components/sections/Quote.tsx` (lines 15-64)
7. `src/components/illusions/RotatingSnakes.tsx` (lines 52-74)
8. `src/components/illusions/HermannGrid.tsx` (lines 12-34)
9. `src/components/illusions/MullerLyer.tsx` (lines 13-37)

**Issue:** ScrollTrigger.create() called without cleanup in useEffect return statement, causing memory leaks on remount.

**Fix:**
```typescript
useEffect(() => {
  const trigger = ScrollTrigger.create({...})
  return () => trigger.kill()
}, [])
```

### Stale Closure Bug (HIGH)
**File:** `src/components/sections/Library.tsx:128-131`

```typescript
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') goToBook(currentIndex - 1)  // STALE!
  if (e.key === 'ArrowRight') goToBook(currentIndex + 1) // STALE!
}
```

The event handler always sees the initial `currentIndex` value (0) due to closure.

**Solution:** Use a ref for currentIndex or add currentIndex to useEffect dependencies with proper cleanup.

### Race Conditions - Fetch Without AbortController

**Files:**
- `src/pages/ArticlePage.tsx:71-102`
- `src/components/sections/Subscribe.tsx:42-78`

If component unmounts during fetch, `setStatus()` calls cause React warnings.

**Fix:**
```typescript
useEffect(() => {
  const controller = new AbortController()
  fetch(url, { signal: controller.signal })
  return () => controller.abort()
}, [])
```

### Missing Error Boundaries
**File:** `src/App.tsx`

No error boundaries wrap the routes. Rendering errors in articles can crash the entire app.

---

## Accessibility (A11Y) Issues

| Category | Count | Severity |
|----------|-------|----------|
| Missing aria-labels | 8+ | HIGH |
| Missing form labels | 4 | HIGH |
| Canvas without alt text | 1 | HIGH |
| Non-semantic interactive elements | 4+ | HIGH |
| Missing focus states | 20+ | MEDIUM |
| Decorative content not hidden | 8+ | MEDIUM |

### Critical A11Y Problems

1. **ThemeToggle.tsx**: Button has only emoji, no aria-label
2. **LanguageSelector.tsx**: Complete dropdown without ARIA pattern
3. **Subscribe.tsx, ArticlePage.tsx**: Form inputs without labels (placeholder only)
4. **RotatingSnakes.tsx:99-104**: Canvas without aria-label or alternative
5. **Topics.tsx:120-157**: Interactive divs instead of buttons (not keyboard navigable)

---

## Configuration Issues

| File | Issue |
|------|-------|
| `eslint.config.js` | **MISSING** - ESLint 9 requires flat config |
| `.env` | **MISSING** - Only .env.example exists |
| `index.html` | No meta description, no CSP headers |
| `package.json` | Vulnerable dependencies (esbuild) |

---

## Code Quality

### Code Duplication
`categoryKeyMap` is defined **3 times** in:
- `src/pages/ArticlePage.tsx:16-23`
- `src/components/sections/Library.tsx:10-18`
- `src/components/sections/FeaturedPost.tsx:5-13`

**Solution:** Extract to shared constants file.

### Array Index as Key (Anti-Pattern)
**5 locations affected:**
- `LandingPage.tsx:33` - Particles
- `ArticleContentRenderer.tsx:15-96` - Content blocks
- `RotatingSnakes.tsx:66` - Grid squares
- `HermannGrid.tsx:66` - Grid squares
- `Quote.tsx:88` - Words

---

## Recommended Immediate Actions

1. **Run `npm install`** to restore dependencies
2. **Create `eslint.config.js`** with ESLint 9 flat config
3. **Run `npm audit fix`** to fix vulnerable dependencies
4. **Create `.env` file** from .env.example
5. **Add GSAP ScrollTrigger cleanup** in all 9 affected components
6. **Fix Library.tsx stale closure** bug
7. **Add Error Boundary** around routes in App.tsx
8. **Add aria-labels** to interactive elements for accessibility

---

## Files Requiring Changes

### High Priority
- `src/components/sections/Library.tsx` - Stale closure, memory leak
- `src/components/sections/Subscribe.tsx` - Memory leak, race condition
- `src/pages/ArticlePage.tsx` - Memory leak, race condition
- `src/App.tsx` - Add Error Boundary
- `eslint.config.js` - Create new file
- `.env` - Create from example

### Medium Priority
- All 9 GSAP components - Add ScrollTrigger cleanup
- `src/components/article/HighlightBox.tsx` - Remove console.error, replace alert()
- `index.html` - Add CSP headers, meta description

### Low Priority
- Extract `categoryKeyMap` to shared constants
- Add aria-labels to all interactive elements
- Replace array index keys with stable identifiers

---

## Summary

| Category | Critical | High | Medium | Low |
|----------|----------|------|--------|-----|
| Build/Config | 2 | 1 | 2 | - |
| Security | - | 1 | 2 | 2 |
| React Bugs | - | 13 | 5 | 5 |
| Accessibility | - | 4 | 3 | 10+ |
| **Total** | **2** | **19** | **12** | **17+** |

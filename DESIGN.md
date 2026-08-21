---
name: Chris Ma Portfolio
description: Luxury Book Cloth — warm gold on deep slate, Taschen / Phaidon monograph register
colors:
  ground:      "#1C3340"
  surface:     "#0D1F28"
  gold:        "#D4AF6E"
  parchment:   "#F0EAD6"
  muted:       "#B8A898"
  burgundy:    "#8B2635"
  rule:        "#2A4455"
typography:
  display:
    fontFamily: "var(--font-playfair), Georgia, serif"
    fontSize: "clamp(4.5rem, 18vw, 16rem)"
    fontWeight: 700
    fontStyle: "italic"
    lineHeight: 0.9
    letterSpacing: "normal"
  headline:
    fontFamily: "var(--font-playfair), Georgia, serif"
    fontSize: "clamp(2.5rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "normal"
  title:
    fontFamily: "var(--font-playfair), Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-space-grotesk), system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.25em"
  sub-label:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "0.5625rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.25em"
rounded:
  none: "0px"
spacing:
  xs: "0.25rem"
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
  section: "6rem"
  section-lg: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "1rem 2rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    borderColor: "{colors.rule}"
    rounded: "{rounded.none}"
    padding: "1rem 2rem"
  button-ghost-hover:
    backgroundColor: "transparent"
    textColor: "{colors.parchment}"
    borderColor: "{colors.gold}"
    rounded: "{rounded.none}"
    padding: "1rem 2rem"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    borderColor: "{colors.rule}"
    rounded: "{rounded.none}"
    padding: "0.125rem 0.5rem"
---

# Design System: Chris Ma Portfolio

## Overview

**Creative North Star: "The Luxury Monograph"**

This portfolio is conceived as a physical object — a Phaidon or Taschen monograph that happens to render in a browser. The ground is deep slate (`#1C3340`), not black: the darkness of a cloth-covered binding, not a gaming setup. Warm gold (`#D4AF6E`) is the only accent, used as foil-stamp lettering for the name and key headings. Body text is warm parchment (`#F0EAD6`). Nothing is neon, nothing is fluorescent, nothing is cold.

The display typeface is Playfair Display Bold Italic — a high-contrast serif used extensively in luxury publishing (Penguin Modern Classics, high-end magazine covers). The name "CHRIS MA" appears at display scale in gold italic on deep slate, reading like a title on a book spine. Work is presented as a typographic table of contents with Roman numerals — not a card grid.

**Key Characteristics:**
- Deep slate ground throughout — warm, rich, NOT tech-dark
- Gold as the only accent — one color, used structurally
- Playfair Display Bold/Italic for all headings
- Space Grotesk for body copy
- Work section as a typeset table of contents (Roman numerals, no cards)
- Zero border radius — bookbinding register
- No gradients — tonal layering only

## Colors

One accent color on a rich ground.

### Primary
- **Warm Gold** (`#D4AF6E`): The name, section headings, CTAs, horizontal rules. Used sparingly — its rarity is structural.

### Ground & Text
- **Deep Slate** (`#1C3340`): Primary background. The color of a cloth-covered book binding.
- **Deep Surface** (`#0D1F28`): Secondary sections — about, process. Slightly deeper.
- **Parchment** (`#F0EAD6`): Primary body text and secondary headings on dark ground.
- **Muted Parchment** (`#B8A898`): Secondary labels, metadata, captions.
- **Deep Burgundy** (`#8B2635`): Rare accent — one use maximum (article section accent or date highlight).
- **Rule** (`#2A4455`): 1px dividers, borders. Barely visible against the ground.

### Named Rules
**The Single Accent Rule.** Gold is the only chromatic accent. No new colors are introduced. A second accent color requires gold to vacate first.

**The Warm Ground Rule.** The ground is `#1C3340` — a warm teal-dark, not pure black or cool grey. The warmth is structural: it makes gold read as foil, not as highlight.

## Typography

**Display Font:** Playfair Display 700 Italic (fallback: Georgia, serif)
**Body Font:** Space Grotesk 400 (fallback: system-ui, sans-serif)
**Label Font:** System monospace

**Character:** Playfair Display at large scale reads as a letterpress impression — high contrast, calligraphic, authoritative. The italic weight at display sizes evokes a title page or book spine. Space Grotesk handles the modern operational voice. System monospace carries metadata.

### Hierarchy
- **Display** (700 italic, clamp(4.5rem–16rem), line-height 0.9): Name only. "CHRIS MA" split across two lines in warm gold on deep slate.
- **Headline** (700, clamp(2.5rem–6rem), line-height 0.92): Section headings — "Selected Work", "About", "Approach", "Writing", "Correspondence". Gold on slate. NOT italic for headings — italic reserved for the name.
- **Title** (400, clamp(1.5rem–2.5rem), line-height 1.1): Project titles in the TOC. Playfair regular, parchment, hover to gold.
- **Body** (400, 1rem, line-height 1.7): Descriptive copy, bio text. Space Grotesk. Max 65ch.
- **Label** (400, 10px, letter-spacing 0.25em, uppercase): All metadata. Dates, categories, Roman numerals. System monospace.

### Named Rules
**The Italic Name Rule.** Italic is used ONLY for the hero name. All other headings are upright (non-italic).

**The No-Eyebrow Rule.** No label above a heading.

## Layout

Full-bleed sections with 24px–64px horizontal padding. The hero is full-bleed slate with the name at display scale.

Work section uses a typographic list — NOT a card grid:
- Roman numeral in gold monospace (I, II, III, IV)
- Project title in Playfair regular at large scale
- Category in monospace label
- Year right-aligned

Section vertical rhythm: 6rem mobile, 8rem desktop.

## Elevation & Depth

Flat. No shadows. Depth through tonal layering:
- `#1C3340`: primary ground
- `#0D1F28`: deeper sections
- `#2A4455`: rule lines — barely perceptible

## Shapes

Zero border radius. Hard square edges throughout. The book-binding register requires it.

## Components

### Buttons
- **Primary:** Gold background, deep text. Hover: parchment background.
- **Ghost:** Rule-color border, muted text. Hover: gold border, parchment text.
- **TOC entries:** No button style — typographic hover (title turns gold).

### Navigation
Fixed top. `#0D1F28/95%` backdrop. Playfair Display "CM" monogram in gold. Nav links in monospace uppercase muted parchment. Bottom border in gold on scroll.

### Work Table of Contents
Replaces card grid entirely. Each entry:
- Left: Roman numeral (I–IV) in gold monospace
- Center: Project title in Playfair + category in monospace
- Right: Year in monospace
- Full-width gold rule above each entry
- On hover: title transitions to gold, brief description fades in below

## Do's and Don'ts

### Do:
- **Do** use `#1C3340` or `#0D1F28` for all section backgrounds.
- **Do** use gold (`#D4AF6E`) only for the name, primary headings, and CTAs — no other uses.
- **Do** use Playfair Display italic for the hero name only.
- **Do** present work as a typographic table of contents, not a card grid.
- **Do** use `border-radius: 0` on everything.

### Don't:
- **Don't** introduce bright colors, neon accents, or fluorescent tones.
- **Don't** use Playfair italic outside the hero name.
- **Don't** use a card grid for work — the TOC is the identity.
- **Don't** use warm cream (`#F5F4F0`) as a section background — parchment is text only.
- **Don't** add `box-shadow` anywhere.

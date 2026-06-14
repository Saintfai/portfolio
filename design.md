---
name: Graphic Multiverse
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#5b403d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#906f6c'
  outline-variant: '#e4bdba'
  surface-tint: '#bb161f'
  primary: '#b8121d'
  on-primary: '#ffffff'
  primary-container: '#dc3132'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3ad'
  secondary: '#1659c2'
  on-secondary: '#ffffff'
  secondary-container: '#5f93ff'
  on-secondary-container: '#002b6a'
  tertiary: '#705d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c8a900'
  on-tertiary-container: '#4b3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#930010'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b0c6ff'
  on-secondary-fixed: '#001944'
  on-secondary-fixed-variant: '#00429a'
  tertiary-fixed: '#ffe16d'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Anybody
    fontSize: 80px
    fontWeight: '900'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 36px
  subheading:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  border-width: 4px
  border-width-heavy: 8px
  gutter: 24px
  margin-page: 32px
  stack-offset: 8px
---

## Brand & Style
This design system captures the raw energy of Golden and Silver Age comic books and fuses it with the uncompromising structure of Web Brutalism. The brand is loud, kinetic, and unapologetically bold, targeting an audience that appreciates editorial craftsmanship and high-impact storytelling.

The aesthetic is defined by "The Heavy Ink" style: 
- **Aggressive Contrast:** Deep blacks and vibrant primary colors against a stark white canvas.
- **Kinetic Energy:** Elements are rarely static; they feature slight rotational tilts and "breaking the frame" techniques where imagery or text overflows its container.
- **Tactile Printing:** Use of halftone patterns and "off-register" color offsets to mimic vintage printing presses.
- **Structural Brutalism:** Layouts are rigid and honest, using heavy 4px+ borders to define space rather than shadows or soft gradients.

## Colors
The palette is restricted to high-saturation primary tones that evoke iconic heroic archetypes. 

- **Spider-Man Red (#E23636):** Used for primary actions, critical alerts, and "Hero" headings.
- **Captain America Blue (#0051BA):** Used for secondary interactions, links, and structural accents.
- **Wolverine Yellow (#FFD700):** Used for highlighting, callouts, and "pow" moments within the UI.
- **Pure Black (#000000):** The foundational "Ink" color. All borders, dividers, and body text must use this value. 
- **Pure White (#FFFFFF):** The "Gutter" color. All backgrounds remain stark white to maintain high legibility and contrast.

Color application should follow a "Flat Wash" approach—no gradients or subtle shading. Halftone overlays (black dots at 10-20% opacity) should be used on color blocks to add depth without breaking the brutalist aesthetic.

## Typography
Typography is treated as a visual element, not just a carrier of information. 

- **Display Text:** Use **Anybody** (extra-bold/black) for all headings. It provides the heavy, variable-width impact of vintage comic titling. 
- **Body Text:** **Archivo Narrow** provides a condensed, functional feel reminiscent of dialogue bubbles and "Letters to the Editor" columns, maximizing space and maintaining a utilitarian Brutalist vibe.
- **Technical Labels:** **JetBrains Mono** is used for metadata, captions, and UI labels to lean into the "process" side of Brutalism.

**Rules:**
- Headlines should often feature a -2 degree to +2 degree rotation to create a "pasted-on" look.
- Use heavy text strokes (1px black outline) on large display type when placed over color blocks.

## Layout & Spacing
The layout philosophy is based on **Overlapping Panels**. It rejects the clean, centered margins of modern SaaS in favor of an asymmetric, editorial feel.

- **The Grid:** A strict 12-column grid, but elements should frequently span "odd" column counts (e.g., a 7-column main panel with a 5-column offset).
- **Asymmetry:** Offset elements intentionally. A card's background shadow should not be a shadow, but a solid black box offset by `stack-offset`.
- **The Frame:** Every major container must have a minimum `4px` black border. 
- **Breaking the Grid:** Key visuals (illustrations, large typography) should break out of their parent containers, overlapping onto adjacent gutters or sections.

## Elevation & Depth
Elevation is achieved through **Physical Stacking** rather than Z-axis lighting.

- **No Shadows:** Shadows are strictly forbidden. Depth is conveyed through "Hard Offsets"—a solid black or primary-colored rectangle placed behind the main element, shifted 8px down and 8px right.
- **Tonal Layering:** Use the tertiary color (Yellow) to "highlight" specific panels, making them pop forward in the visual hierarchy.
- **Halftone Blurs:** Instead of gaussian blurs, use a halftone pattern density to indicate background layers. The more "distant" an object, the coarser the dot pattern.

## Shapes
The shape language is strictly **Geometric and Sharp**. 

- **Zero Radius:** Every corner must be a 90-degree angle. This applies to buttons, inputs, cards, and even selection states. 
- **Diagonal Shears:** To add movement, use CSS `clip-path` to create "slashed" edges on buttons or section dividers, mimicking the sharp angles of a comic book action sequence.
- **Panel Insets:** Internal containers should use the same heavy 4px border, creating a "box within a box" effect common in complex comic layouts.

## Components

### Buttons
- **Primary:** Background Red, 4px Black border, Bold white text. On hover, the button shifts -4px up and -4px left, revealing a solid black "shadow" underneath.
- **Secondary:** White background, 4px Black border, Black text.
- **Ghost:** No background, 4px Black border, text in Blue.

### Cards
- Always 4px Black border.
- Header of the card should be a solid color block (Blue or Red) with white text.
- Content area is White with 24px padding.
- Use "The Kicker": A small Yellow label box that overlaps the top-left corner of the card border.

### Inputs & Fields
- Pure White background, 4px Black border.
- Focus state: Border changes to Blue and the thickness increases to 6px.
- Labels: Always uppercase JetBrains Mono, placed directly on the top border line (as an inset).

### Chips & Tags
- Rectangular with 2px Black borders.
- Background colors correspond to category types (Yellow for 'New', Blue for 'Info', Red for 'Urgent').
- Text is always black and bold.

### Lists
- Items separated by a 4px horizontal black rule.
- Hover state: The entire row background turns Yellow, and the text gains a slight "tilt" effect.

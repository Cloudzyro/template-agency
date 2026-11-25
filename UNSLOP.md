# Unslop pass

Done with the unslop skill (unslop by Damir Sokolovsky, @heydamir, CC BY 4.0) on November 25, 2026.

## Audit

Light slop. The template was built with its own palette (bone, ink, one cobalt), one type family on its width axis and drawn deliverables, so this was polish mode. Signs found:

- Every case study figure set in the cobalt accent, so the results row competed with the primary button (`app/work/[slug]/page.tsx`)
- Two buttons in the hero with the same label as the header button ("Start a project" twice on the first screen) (`data/site.ts`)
- Generic call-to-action headline that would fit any agency, "Have a project in mind?" (`data/site.ts`)
- Process step meta reading "1, Weeks 1 to 3": a number glued to a label instead of hierarchy (`app/page.tsx`)
- Headline widows ("world" alone on the third line) on the home hero and large titles (`app/globals.css`)
- Case study and next-project drawings cropped at wide frames (the coffee bag lost its top and base), and the drawing's own edge showing as a hard band (`components/WorkArt.tsx`)
- Sign drawing text running close to the panel edge (`components/WorkArt.tsx`)

Not found: gradients, glows, blobs, pill badges, uppercase tracked labels, emoji, italic emphasis, hover scale, transition-all, looping motion, 700 to 900 weights, trailing periods on labels or buttons, hype words.

## Direction

- Product: a Pittsburgh brand and product design studio showing regional businesses and public organizations what it made for clients like them, and asking for a brief.
- Character: plain-spoken, measured, sturdy.
- World: a drafting table and print shop floor: bone paper, black ink, cobalt pencil, title blocks on drawing sheets.
- Moments: the deliverables themselves, drawn at real proportions in the clients' own colors (dock sign, coffee bag, clinic app, poster, shop bag, rates page).
- Signature: the drawing-sheet title block that opens every section (a full ink rule, the section name in condensed Archivo on the left, a count or note on the right), plus the plumb bob mark.

## Changes

- Color: results figures moved from cobalt to ink; cobalt now marks only the primary action, the active nav item, focus and the logo mark
- Copy: hero secondary action is "How we work" (to the process), contact headline is "Tell us what you're making"
- Type: `text-wrap: balance` on all display type, so no single-word last lines
- Layout and details: process steps show the weeks as meta and the step number in muted display type next to the name
- Visuals: wide frames show the whole drawing on its own matched background, with floors and water drawn past the edges so there is no hard band; sign lettering pulled in from the panel edge
- Motion: unchanged (color transitions only, a 0.98 press, menu bars rotate; all off with reduced motion)

## Screenshots

screenshot-2: Kettle Bay Ferries case study, the drawn dock sign and project facts. screenshot-3: Selected work on the home page.

# Button

The `Button` component is a foundational element of the design system. It supports multiple variants, sizes, and states to support a wide range of UI use cases.

---

## ✨ Features

- Multiple variants: `primary`, `secondary`, `ghost`, `destructive`
- Support for loading and disabled states
- Optional icons
- Accessible by default (`<button>` semantics, `aria` labels)

---

## 📦 Usage

```tsx
import { Button } from '@your-scope/design-system';

<Button variant="primary">Submit</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost" disabled>Disabled</Button>
<Button variant="destructive" onClick={handleDelete}>Delete</Button>
````

---

## 🔧 Props

| Name       | Type                                                   | Description                         |
| ---------- | ------------------------------------------------------ | ----------------------------------- |
| `children` | `React.ReactNode`                                      | The button label or content         |
| `variant`  | `"primary" \| "secondary" \| "ghost" \| "destructive"` | Style variant                       |
| `onClick`  | `() => void`                                           | Function called when clicked        |
| `disabled` | `boolean`                                              | Disables the button if true         |
| `loading`  | `boolean`                                              | Shows a spinner if true             |
| `icon`     | `React.ReactNode`                                      | Optional icon rendered before label |

---

## 🎨 Theming

The button respects the current theme (light, dark, or custom). Variant styles are derived from design tokens:

| Variant     | Token Base                            |
| ----------- | ------------------------------------- |
| Primary     | `color.primary`, `background.primary` |
| Secondary   | `color.text`, `border.base`           |
| Ghost       | `transparent background`, `hover bg`  |
| Destructive | `color.error`, `hover.errorDark`      |

---

## 🧪 Accessibility

* Uses a semantic `<button>` element
* Accepts keyboard focus and `Enter`/`Space` key activation
* `aria-label` and `aria-disabled` supported

---

## 🖌 Design Reference

[Figma – Button Component ↗](https://www.figma.com/file/your-link-here)

---

## 📝 Notes

* For icon-only buttons, include `aria-label`
* Consider `type="submit"` when using inside a `<form>`
* Use `loading` state instead of disabling on submit when possible

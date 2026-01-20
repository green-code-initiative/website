# Updating Partner Organizations

This guide explains how to update the partner organizations listed on the website. The data for these organizations is stored in a JSON file located in the `src/assets/data` directory.

## Partner Organizations

Partner organizations are listed in the `partner-organizations.json` file. To update the partner organizations, follow these steps:

1. Open the `src/assets/data/partner-organizations.json` file.
2. Add, remove, or update the partner organization entries as needed. Each entry should have the following structure:

```jsonc
{
  "name": "Organization Name",
  "img": "logo_filename.webp",
  "width": 160,
  "height": 72,
  "level": "platinum", // required: "platinum", "gold", or "silver"
  "type": ["partner"], // required: array of "partner" and/or "sponsor"
}
```

Organizations with **"platinum"** or **"gold"** level are automatically displayed on the homepage, sorted alphabetically by name.

### Example

```json
[
  {
    "name": "Company 1",
    "img": "company_1.webp",
    "width": 160,
    "height": 72,
    "level": "silver",
    "type": ["partner"]
  },
  {
    "name": "Company 2",
    "img": "company_2.webp",
    "width": 180,
    "height": 76,
    "level": "platinum",
    "type": ["partner", "sponsor"]
  }
]
```

## Saving Changes

After making the necessary updates to the JSON file, save the changes and open a PR with these. After merge, the website will automatically reflect the updated partner organizations.

## Notes

- Ensure that the logo filenames match the actual image files in directory `public/img/organizations/`. Image files must be in **WebP format**.
- The width of the logo must not exceed 160px. Also, the height must not exceed 80px. You can respect the recommended ratio and have a smaller height.
- Verify that the website links are correct and active.

By following these steps, you can keep the partner organization information up to date on the website.

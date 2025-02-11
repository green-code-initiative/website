# Updating Technologies

This guide explains how to update the technologies listed on the website. The data for these technologies is stored in a JSON file located in the `src/assets/data` directory.

## Technologies

Technologies are listed in the `technologies.json` file. To update the technologies, follow these steps:

1. Open the `src/assets/data/technologies.json` file.
2. Add, remove, or update the technology entries as needed. Each entry should have the following structure:

```json
{
  "name": "Technology Name",
  "logo": "logo_filename.webp"
}
```

### Example

```json
[
  {
    "name": "Python",
    "logo": "python.webp"
  },
  {
    "name": "Java",
    "logo": "java.webp"
  }
]
```

## Saving Changes

After making the necessary updates to the JSON file, save the changes and open a PR with these. After merge, the website will automatically reflect the updated technologies.

## Notes

- Ensure that the logo filenames match the actual image files in directory `public/img/tech/`.
- Verify that the logos are in **WebP format** and **120\*120px** in size.

By following these steps, you can keep the technology information up to date on the website.

# Updating Team Members

This guide explains how to update the team members listed on the website. The team members are categorized into two groups: core members and contributors. The data for these members is stored in JSON files located in the `src/assets/data` directory.

## Core Members

Core members are listed in the `core-members.json` file. To update the core members, follow these steps:

1. Open the `src/assets/data/core-members.json` file.
2. Add, remove, or update the core member entries as needed. Each entry should have the following structure:

```json
{
  "name": "Full Name",
  "company": "Company Name",
  "profile": "profile_image_filename.webp",
  "links": {
    "linkedin": "linkedin_profile_id",
    "github": "github_username"
  }
}
```

### Example

```json
[
  {
    "name": "David De Carvalho",
    "company": "Capgemini",
    "profile": "david_de_carvalho.webp",
    "links": {
      "linkedin": "david--de--carvalho",
      "github": "dedece35"
    }
  },
  {
    "name": "Jules Delecour",
    "company": "Davidson",
    "profile": "jules_delecour.webp",
    "links": {
      "linkedin": "jules-delecour-498680118",
      "github": "jules-delecour-dav"
    }
  }
]
```

## Contributors

Contributors are listed in the `contributors.json` file. To update the contributors, follow these steps:

1. Open the `src/assets/data/contributors.json` file.
2. Add, remove, or update the contributor entries as needed. Each entry should have the following structure:

```json
{
  "name": "Full Name",
  "company": "Company Name",
  "profile": "profile_image_filename.webp",
  "links": {
    "linkedin": "linkedin_profile_id",
    "github": "github_username"
  }
}
```

### Example

```json
[
  {
    "name": "Justin Berque",
    "company": "Webwag",
    "profile": "justin_berque.webp",
    "links": {
      "linkedin": "justin-berque-444412140",
      "github": "Jberque"
    }
  },
  {
    "name": "Jean-Yves Cronier",
    "company": "Crédit Agricole Payment Services",
    "profile": "jean-yves_cronier.webp",
    "links": {
      "linkedin": "jean-yves-cronier-ba3b7a18",
      "github": "jycr"
    }
  }
]
```

## Saving Changes

After making the necessary updates to the JSON files, save the changes and open a PR with these. After merge, the website will automatically reflect the updated team members.

## Notes

- Ensure that the profile image filenames match the actual image files in directory `public/img/profil/`. Image files must be in **WebP format** and **80\*80px** in size.
- Verify that the LinkedIn and GitHub links are correct and active.

By following these steps, you can keep the team member information up to date on the website.

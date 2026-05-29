# Zhao Yuankun Portfolio

Personal portfolio website for Zhao Yuankun, focused on brand communications, content production and reputation management.

## Update Content

Key website content is maintained in `src/App.jsx`:

- Profile and contact details
- Selected work and external media links
- Resume information
- Social channels

The brand mark image is stored at `public/brand-mark.webp`.

### WeChat Article Column

The article column on the work page is populated from verified public-account article links. In `src/App.jsx`, edit the entries in `featuredArticles` to update articles:

```js
{
  title: "Article title",
  href: "https://mp.weixin.qq.com/s/...",
  cover: `${import.meta.env.BASE_URL}articles/cover-01.webp`,
}
```

Store article cover images in `public/articles/`. Social profile links can be edited in the `channels` list in the same file.

### Photography Gallery

The photography entry on the work page links to the dedicated `/photography` gallery page. The gallery is driven by the `photographyWorks` list in `src/App.jsx`.

To add a new photo:

1. Export a large WebP image to `public/photography/full/`.
2. Export a thumbnail WebP image to `public/photography/thumbs/`.
3. Add one object to `photographyWorks`:

```js
{
  title: "Photo title",
  location: "City or place",
  year: "2026",
  layout: "standard", // large, portrait, standard, wide
  thumb: `${import.meta.env.BASE_URL}photography/thumbs/file-name.webp`,
  src: `${import.meta.env.BASE_URL}photography/full/file-name.webp`,
  alt: "Short image description",
}
```

## Publish

Changes pushed to the `main` branch are built and published through GitHub Pages automatically.

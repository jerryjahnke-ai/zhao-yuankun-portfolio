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

The article column on the work page is prepared for verified public-account articles. In `src/App.jsx`, add the top ten entries to `featuredArticles` after confirming the reading ranking:

```js
{
  title: "Article title",
  href: "https://mp.weixin.qq.com/s/...",
  cover: `${import.meta.env.BASE_URL}articles/cover-01.webp`,
}
```

Store article cover images in `public/articles/`. A valid public Douyin profile link can also be added in the `channels` list in the same file.

## Publish

Changes pushed to the `main` branch are built and published through GitHub Pages automatically.

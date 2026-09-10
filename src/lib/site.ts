// The default deployment is the GitHub Pages project configured in deploy.yml.
// Set NEXT_PUBLIC_SITE_URL when deploying the export at a different public URL.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://mk-aify.github.io/ecobiocides-web").replace(/\/+$/, "");

export function siteUrl(path = "/") {
  return new URL(path.replace(/^\/+/, ""), `${SITE_URL}/`).toString();
}

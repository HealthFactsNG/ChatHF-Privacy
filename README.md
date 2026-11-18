# ChatHF Privacy Policy

The public privacy policy for the ChatHF app, as a static site for GitHub Pages:
plain HTML and CSS, with a small optional script.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The policy |
| `styles.css` | Layout, light and dark themes, print styles |
| `script.js` | Contents highlighting, print and back-to-top buttons (optional) |
| `favicon.svg` | Tab icon |
| `.nojekyll` | Makes GitHub Pages serve the files as they are |

## Preview locally

```sh
python3 -m http.server 8080
# open http://localhost:8080
```

## Publish on GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, and choose branch `main`, folder `/ (root)`.
3. The site goes live at `https://<user>.github.io/<repo>/`. Use that URL as the privacy policy URL in Play Console and in the app.

## Updating the policy

Edit `index.html` and change the effective date at the top (`<time datetime="…">`).
If the change is significant, tell users in the app as well.

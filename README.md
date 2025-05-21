# 🎥 YouTube Video AI Summary (Perplexity)

A lightweight **Tampermonkey user script** that adds a convenient "Get Summary on Perplexity" button to any YouTube video page. It copies the current video URL to your clipboard and opens an AI-powered summary using [Perplexity](https://www.perplexity.ai/) in a new tab.

---

## 🔧 Features

- ✅ Adds a stylish button under YouTube video info  
- ✅ Automatically copies the current video URL  
- ✅ Opens the video link in Perplexity for instant AI summary  
- ✅ Simple and non-intrusive UI  

---

## 🧪 How It Works

1. You’re watching a YouTube video.
2. Click the **"Get Summary on Perplexity"** button injected into the page.
3. The video URL is copied to your clipboard.
4. A new tab opens with the video URL sent to Perplexity AI.
5. Get a concise summary of the video!

---

## ⚙️ Installation

### Step-by-step:

1. Install [Tampermonkey](https://www.tampermonkey.net/) or another userscript manager.
2. Click on the **"Raw"** button from this GitHub repo or download the `.user.js` file.
3. Open Tampermonkey → Dashboard → Install → Load the script.
4. Go to any YouTube video and enjoy summarizing!

---

## 📄 UserScript Metadata

```js
// ==UserScript==
// @name         YouTube Video AI Summary (Perplexity)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Adds a button to YouTube video pages to copy the URL and open a Perplexity AI summary in a new tab.
// @author       https://github.com/pullso
// @match        https://www.youtube.com/watch?v=*
// @grant        GM_setClipboard
// ==/UserScript==
```

---

## 🛠️ Development

Contributions are welcome! If you'd like to improve the UX, add more features (like auto-submitting the query to Perplexity), or fix bugs, feel free to open an issue or submit a pull request.

### Tech Stack:
- JavaScript (Vanilla + Tampermonkey API)
- Puppeteer-like approach via Perplexity AI (not required locally)

---

## 📬 Contact

Want to collaborate or have suggestions?  
📬 Reach out on Telegram: [@pullso](https://t.me/pullso)  
💼 LinkedIn: [Pavel Dubitskii](https://www.linkedin.com/in/pavel-dubitskii/)

---

## 📚 More Projects by @pullso

Check out my other open-source projects:
- [LinkedIn Bot](https://github.com/pullso/linkedin-bot)
- [Telegram Spotify Now Playing Bot](https://github.com/pullso/nowplaying-telegram-spotify-bot)
- [Medium Clone with NestJS](https://github.com/pullso/medium-clone-nestjs)
- [Simple Excel Clone in JS](https://github.com/pullso/excel-google-sheet-js)

---

## 💡 Future Ideas

- Add an inline iframe summary box instead of opening a new tab
- Support for multiple AI platforms (ChatGPT, Bard, etc.)
- Save summaries locally or sync with Notion/Google Docs

---

## 📝 License

MIT © [pullso](https://github.com/pullso)

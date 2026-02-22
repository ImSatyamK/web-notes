# WEB NOTES – Simple URL & Notes Saver Chrome Extension

WEB NOTES is a lightweight Chrome extension that allows users to save URLs and Notes for later viewing.  
You can manually enter links, store them locally, and open them anytime in a new tab.

---

## 🚀 Features

- Save URLs & Notes manually
- Save using Enter key
- Persistent storage using `localStorage`
- View saved links instantly
- Clear all saved links
- Opens saved links in a new tab

---

## 🛠 Tech Used

- HTML
- CSS
- JavaScript
- Chrome Extension Manifest V3

---

## 📂 Project Structure

```
web-notes/
│── manifest.json
│── index.html
│── script.js
│── style.css
│── icon.png
```

---

## 📦 Installation (Load Unpacked)

1. Open Chrome
2. Go to `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the project folder

The extension will now appear in your toolbar.

---

## 🧠 How It Works

- URLs are stored in the browser using `localStorage`
- When the popup opens, stored URLs are loaded and rendered
- Clicking a saved URL opens it in a new tab
- The clear button removes all stored URLs

---

## ⚠️ Notes

- This extension stores data locally in your browser only.
- Data is not synced across devices.
- Clearing browser storage will remove saved URLs.

---

## 📌 Future Improvements (Optional Ideas)

- Prevent duplicate URLs
- Add delete button for individual links
- Use `chrome.storage` instead of `localStorage`
- Add favicon previews

---

## 👨‍💻 Author

Built as a learning project to understand:
- Chrome Extensions
- DOM manipulation
- Local storage
- Event handling

---

## 📄 License

This project is for educational purposes.
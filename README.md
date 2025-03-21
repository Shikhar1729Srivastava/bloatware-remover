# **🚀 Bloatware Remover Web App**

## 🌟 **Overview**
Bloatware Remover is a web application that allows users to uninstall unwanted applications from their Android devices using ADB (Android Debug Bridge). The app runs locally on a system and provides a simple interface to manage installed apps efficiently.

## 🔥 **Features**
- ✅ Install and uninstall apps using ADB commands.
- ✅ Simple web-based interface.
- ✅ Works locally without the need for an internet connection.
- ✅ Compatible with Windows, macOS, and Linux.

---

## 🛠️ **Installation Guide**

### 📌 **Step 1: Install ADB Tools**
1. Download the SDK Platform Tools for your operating system from the official link: [Android Developer Platform Tools](https://developer.android.com/tools/releases/platform-tools)
2. 📂 Extract the downloaded file to a default location.
3. 🔍 Locate the `adb` command-line tool inside the extracted folder.
4. 🔧 Add its path to the system environment variables:
   - **🖥️ Windows**: Go to **Advanced System Settings > Environment Variables > System Variables** and add the path.
   - **🐧 Mac/Linux**: Add the path to your `.bashrc` or `.zshrc` file.

### 📌 **Step 2: Enable Developer Mode on Your Phone**
1. 📱 Open **Settings** on your Android phone.
2. ⚙️ Navigate to **About Phone**.
3. 🏗️ Tap **Build Number** 6-8 times until Developer Mode is enabled.
4. 🔓 Go to **Developer Options** and enable **USB Debugging**.

### 📌 **Step 3: Set Up the Project**
1. 📥 Download the provided project files.
2. 📁 Ensure all files are in the same directory.
3. 🖥️ Open a terminal or command prompt in the project folder.
4. ▶️ Run the following command to start the server:
   ```bash
   node server.js
   ```
5. 🌐 The web app will be hosted locally and can be accessed via a browser.

### 📌 **Step 4: Connect Your Phone**
1. 🔌 Use a USB cable to connect your Android phone to the PC.
2. ✅ If prompted, allow USB debugging on your phone.

---

## 🎯 **Usage Instructions**
1. 🌐 Open the web app in your browser.
2. 📝 Enter the package name of the app you wish to **install** or **uninstall**.
3. 🔘 Click the appropriate button to execute the action.
4. 📤 The app will be installed or removed accordingly.

---

## 🛠️ **Troubleshooting**
- ❌ If the device is not detected, ensure that USB Debugging is enabled and ADB is correctly installed.
- 🔐 If you encounter permission issues, try running the terminal as an administrator.
- 🔍 Ensure that the package name entered is correct.

---

## 👥 **Contributors**
- ✨ SHIKHAR SRIVASTAVA  
- ✨ SHREYANSH AGRAWAL
- ✨ SATYAM PANDEY

For suggestions or contributions, feel free to open an issue or pull request.

---

🚀 **Happy coding!** 🎉

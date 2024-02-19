.... nastaenie v appke

2. ios/App/Podfile -> add this to the and after # Add your pods here
```
pod 'FirebaseCore'
pod 'Firebase/Messaging'
````

3. Navigate to ios/App and run pod install

4. ios/App/App/AppDelegate.swift (add lines/functions with comments)
```
import UIKit
import Capacitor

// Add this line ------
import Firebase

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
		// Add this line ------
		FirebaseApp.configure()
		
        return true
    }

    // ......... other default lines

	// Add this function ------
	func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        Messaging.messaging().apnsToken = deviceToken
        Messaging.messaging().token(completion: { (token, error) in
            if let error = error {
                NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
            } else if let token = token {
                NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: token)
            }
          })
    }

	// Add this function ------
    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
      NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
    }
}

```

5. Setup firebase project


# iOS Firebase app
1. Add iOS app
2. Fill out all required fileds (apple bundle id, nickname, appstore id)
3. Add config file to your app (I advise to copy it to ios/App and then drag it in xcode to the App/App and select copy)
4. Go to cloud messaging and setup APN auth key (we have universal one registered to wezeo https://drive.google.com/drive/folders/1q-IOSbVqdANZ23pjke_69PQVYhAwh2y6?ths=true)

# Android Firebase app
1. Add Android app
2. Fill out all required fileds (apple bundle id, nickname, appstore id)
3. Build your app to android studio, click build -> genereate signed sdk
4. Genereate your keystore file
5. Get sha1 key from keystore `keytool -list -v -keystore {keystore_name} -alias {alias_name}`
6. Download google-services.json and copy it to android/app
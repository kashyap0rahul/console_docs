## How to use IMEI/Serial Number Provisioning Method?

Esper enables you to use IMEI and serial numbers to provision your devices using the Android for Work (AFW) method. Only Android GMS devices running Android 6.0 or above support AFW. It works by using the AFW provisioning process to pass the available IMEIs and serial number for the device to Esper which is then matched to a Provisioning Template that includes either the device's IMEI or serial number. That template is then used to provision the device.

You first need to prepare a Provisioning Template and then go back to either edit the template to [add IMEI and/or serial number](https://docs.esper.io/home/console.html#provisioning-templates) or upload a CSV file from the Provisioning Template’s tile.


Step 1: Begin by [factory resetting](https://docs.esper.io/home/console.html#how-to-factory-reset-your-device) your device.

Step 2: Once the factory reset is completed, on the first screen, click on the **START** button.

**Note**: The button title may be a variation of getting started, setting up your device, or let’s go.

![Factory Reset](./images/AFW-image/AFW_StartButton.png)

Step 3: If your device does not have an active cellular data network connection, you will need to connect the device to the internet using cellular or Wi-Fi.

If you have a cellular device without a SIM, you may encounter the below screen first. Select **SKIP** if you plan to use Wi-Fi. Otherwise, proceed to insert your SIM with cellular data support.

![alt text](./images/AFW-image/AWF_connectmobile.png)

Step 4: When presented with the ‘Copy apps & data’ screen, select ‘Set up as new’. This text may be ‘Don’t Copy’ or another variant.

**Note**: On some devices, this may appear after establishing a Wi-Fi connection.

![alt text](./images/AFW-image/AWF_CopyAppData.png)

Step 5: If you are using Wi-Fi, then complete the steps to connect to your desired access point.

![alt text](./images/AFW-image/AFW_AccessPoint.png)

Step 6: You will see a ‘Checking for updates’… screen that may change to ‘Just a sec… ‘and/or ‘Checking info….’. Please be patient as the device is preparing for enrollment.

![alt text](./images/AFW-image/AFW_checkingupdates.png)

Note: It will take a few moments for the Google ‘Sign-in’ screen to appear.

Step 7: In the Email or phone field, enter **afw#esper** and then select **Next**. As a certified Google EMM partner, this is a particular keyword used by the AFW provisioning process that will then start the process to enroll your device into Esper.

![alt text](./images/AFW-image/AFW_emailphone.png)

Step 8: You will need to give permission to install the Esper agent on your device to begin the enrollment process. Select **INSTALL**.

![alt text](./images/AFW-image/AFW_DeviceInstall.png)

Step 9: The Esper agent will be downloaded to your device. Please be patient.

![alt text](./images/AFW-image/AFW_EsperAgent_DownloadStatus.png)

**Note**: On some devices, you will need to click **INSTALL** again after the agent downloads.

![alt text](./images/AFW-image/AFW_EDM_Install.png)

Step 10: A screen may display asking you to accept specific terms from Google regarding Esper managing your device. Click or touch '**ACCEPT & CONTINUE.**'

![alt text](./images/AFW-image/AFW_AcceptContinue.png)

The Esper agent will now start the installation, and a series of screens will display as Esper prepares for the enrollment.

![alt text](./images/AFW-image/AFW_StartingServices.png)

Step 11:Step 11: The screen flow will stop on the Authentication screen. Enter the Passcode that you set up in the associated Provisioning Template. If you purposely did not set a passcode, leave the Passcode field blank. Once the device is ready, click or tap on **CONTINUE**.

![alt text](./images/imei-image/IMEI_AuthenticationContinue.png)

Step 12: Once Esper has successfully read the QR code, provisioning will start and the 'Starting Provisioning' screen will display.

![alt text](./images/AFW-image/AFW_PreparingDevice.png)![alt text](./images/AFW-image/AFW_PreparingDevice2.png)

**Notes**:

1.  If you wish to exit the provisioning process for any reason, Click on the **Esper** logo 6 times to bring up the option to factory reset the device.
    
2.  If your Provisioning Template enables Google Play, Google Play Services will not be updated. Be aware that this is done by Google and depends on their current quality of service.
    

![alt text]()

Typically (but not always), you need to resolve the permission and allow Esper to modify System settings. Click on **RESOLVE** to open up the Android System settings app to provide the consent.

![alt text](./images/AFW-image/AFW_GooglePaly_Resolve.png)

Step 13: On the 'Can modify system settings’ screen and a list of Apps will be displayed.

**Note**: These are Apps that have been granted or are requesting permission to modify system settings. Esper Device Management will be set to 'No,' or 'Not Allowed.' Click on Esper Device Management to change this setting.

![](./images/AFW-image/AFW_EsperDeviceManagement.png)

  

You will then be taken to ‘Modify system settings’ for **Esper Device Management**. Turn ON the toggle switch located on the right side of the screen to Allow modify system settings.

  

![alt text](./images/AFW-image/AWF_ModifySettings.png)

Step 14: Next, click the **Back** button in the upper left-hand corner of the screen.

![alt text](./images/AFW-image/AFW_ModifyBackButton.png)

Step 15: You will now be taken back to the 'Can modify system settings' screen. You can verify that Esper Device Management is now set to 'Yes' or 'Allowed' for modifying system settings. Now click the **back** button in the Navigation bar.

![alt text](./images/AFW-image/AFW_ModifySettingYes_Back.png)

Step 16: You will now return to the Esper agent. You will typically need to grant another permission to allow Esper to draw over other apps. This is done to ensure a smooth experience for Kiosk mode apps. Click on **RESOLVE** to open up the Android system settings app to provide the permission.

![alt text](./images/AFW-image/AFW_GooglePaly_Resolve.png)

Step 17: On the 'Display Over Other Apps' or 'Draw Over Other Apps' screen, you will see a list of apps that have been granted or are requesting permission to display over other apps.

Note: Esper Device Management will currently be set to 'No,' or 'Not Allowed.'

Click on **Esper Device Management**.

![alt text](./images/AFW-image/AFW_DrawOverDeviceEDM.png)

Step 18: You will then be taken to ‘Display Over Other Apps’ or ‘Draw Over Other Apps’ for Esper Device Management. Click on the toggle switch located on the right side of the screen to ‘Allow display over other apps’ or ‘Permit Drawing Over Other Apps’.

![alt text](./images/AFW-image/AFW_DrawOverOther.png

Step 19: Next, click on the **back** button in the upper left-hand corner of the screen.

![alt text](./images/AFW-image/AFW_DrawOverOtherAppsBack.png)

Step 20: You will now be taken back to the 'Display Over Other Apps' screen. Esper Device Management is now set to 'Yes' or 'Allowed' for drawing over other apps. Next, click on the **back** button in the Navigation bar.

![alt text](./images/AFW-image/AFW_DrawAppsEDMYes.png)

Step 21: You will now return to the Esper agent to install any Esper Enterprise apps.

![alt text](./images/AFW-image/AFW_DeviceInstalling.png)

Now the provisioning is complete, and your device is set up according to your provisioning template. In this example, we’ve provisioned in multi-application mode with three Enterprise apps installed from the Esper Cloud and managed Google Play enabled.

![alt text](./images/AFW-image/AFW_DeviceScreen.png)
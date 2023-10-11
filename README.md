Third-Party Data Sheets
=======================

Mirror of third-party data sheets and schematics for various components used and adapted for the Firefly and related projects.


Micro Controller Unit
---------------------

- ATmega328 - Arduino; 8-bit 32kb Flash, 2kb SRAM, 1kb EEPROM
  - [datasheet](./atmega328.pdf) [external links: [datasheet](http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf)]
- ATmega2560 - Arduino; 8-bit, 256kb Flash, 8kb RAM, 4kb EEPROM
  - [datasheet](./atmega2560.pdf) [external links: [datasheet](http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2549-8-bit-AVR-Microcontroller-ATmega640-1280-1281-2560-2561_datasheet.pdf)]
- ESP32 - Arduino; 32-bit, dual-core @240Mhz, 448kb ROM, 520kb RAM, 1kb eFuse, WiFi+BLE
  - [datasheet](./esp32.pdf) [external links: [datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)]
  - WROOM-32 module - 4/8/16Mb Flash 
    - [datasheet](./esp32-wroom32.pdf) [external links: [datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32_datasheet_en.pdf)]
- ESP32-C3 - RISC-V, 32-bit, single-core @160Mhz, 400kb RAM, 4kb eFuse, WiFi+BLE, World Controller
  - [datasheet](./esp32-c3.pdf) [external links: [datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf)]
  - ESP32-C3-MINI-1 module - 4Mb Flash
    - [datasheet](./esp32-c3-mini-1.pdf) [external links: [datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c3-mini-1_datasheet_en.pdf)]
    - LCSC Part C2838502 [external links: [JLCPCB](https://jlcpcb.com/partdetail/EspressifSystems-ESP32_C3_MINI_1N4/C2838502)]
  - ESP32-C3-DevKitM-1 - Development Board
    - [schematic](./esp32-c3-devkitm.pdf) [external links: [schematic](https://dl.espressif.com/dl/schematics/SCH_ESP32-C3-DEVKITM-1_V1_20200915A.pdf), [summary](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/hw-reference/esp32c3/user-guide-devkitm-1.html)]
- ESP32-S3 - RISC-V, 32-bit, dual-core @240Mhz, 512K RAM, 4kb eFuse, WiFi+BLE, World Controller
  - [datasheet](./esp32-s3.pdf) [external links: [datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)]
  - MINI-1 module
    - [datasheet](./esp32-s3-mini-1.pdf) [external links: [datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3-mini-1_mini-1u_datasheet_en.pdf)]
  - ESP32-S3-DevKitM-1 - Development Board
    - [schematic](./esp32-s3-devkitm.pdf) [external links: [schematic](https://dl.espressif.com/dl/schematics/SCH_ESP32-C3-DEVKITM-1_V1_20200915A.pdf), [summary](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3/user-guide-devkitm-1.html)]


Video Drivers
-------------

- PCD8854 - 48x48 pixels, monochrome
  - [datasheet](./pcd8854.pdf) [external links: [datasheet](https://www.sparkfun.com/datasheets/LCD/Monochrome/Nokia5110.pdf)]
- SSD1306 - 128x64 pixel, monochrome
  - [datasheet](./ssd1306.pdf) [external links: [download](https://www.szmaclight.com/download/SSD1306-datasheet.html)]
- ST7789 - 240x240 pixel, 16-bit (RGB565) color
  - [datasheet](./st7789.pdf) [external links: [datasheet](https://www.newhavendisplay.com/appnotes/datasheets/LCDs/ST7789V.pdf)]


Display Panels
-------------

- DM-TFT-377 - 240x240 pixel IPS Display, ST7789 driver, 12 pin (welded)
  - [datasheet](./dm-tft13-377panel.pdf) [external links: [datasheet](https://cdn.shopify.com/s/files/1/0264/7629/files/DM-TFT13-377panel_Datasheet.pdf?v=1659336245), [other resources](https://www.displaymodule.com/products/1-3-240-x-240-ips-tft-display-module-spi)]
  - [devboard](./dm-tft13-377.pdf) [external links: [devboard](https://cdn.shopify.com/s/files/1/0264/7629/files/DM-TFT13-377_Datasheet.pdf?v=1659336245)]
- DM-TFT-377 - 240x240 pixel IPS Display, ST7789 driver, 24 pin (plug-in)
  - [datasheet](./zjy133t-if05.pdf) [external links: [datasheet](https://cdn-shop.adafruit.com/product-files/4520/4520_C13462__________.pdf)]
  - [devboard schematic](./adafruit-tft13-breakout-schematic.png) [external links: [devboard](https://cdn-learn.adafruit.com/assets/assets/000/079/156/original/adafruit_products_1-3in_IPS_TFT_Sch.png?1565202407), [tutorial](https://cdn-learn.adafruit.com/downloads/pdf/adafruit-1-3-and-1-54-240-x-240-wide-angle-tft-lcd-displays.pdf)]
- WS2812B-2020 - Addressable LED
  - [datasheet](./ws2812b-2020.pdf) [external links: [datasheet download](http://www.world-semi.com/solution/details-140-4.html)]

Secure Element
--------------

- ATEC806A - Secure Element
  - [datasheet](./atec806a.pdf) [external links: [datasheet](http://ww1.microchip.com/downloads/en/DeviceDoc/ATECC608A-TNGTLS-CryptoAuthentication-Data-Sheet-DS40002112B.pdf)]
  - [summary](./atec806a-summary.pdf) [external links: [summary](http://ww1.microchip.com/downloads/en/DeviceDoc/40001977A.pdf)]


Camera Module
-------------

- OV7670 - 640x480 pixels, 30fps
  - [datasheet](./ov7670.pdf) [external links: [datasheet](https://www.voti.nl/docs/OV7670.pdf)]


Power Sub-System
----------------

- 10A45B - Regulated Charge Pump DC/DC Converter
  - [datasheet](./10a45b.pdf)
- AMS1117 - Voltage Regulator
  - [datasheet](./ams1117.pdf) [external links: [datasheet](https://datasheet.lcsc.com/lcsc/1811142212_Advanced-Monolithic-Systems-AMS1117-3-3_C6186.pdf)]
  - LCSC Part C6186 [external links: [JLCPCB](https://jlcpcb.com/parts/componentSearch?isSearch=true&searchTxt=ams1117)]
- SPX3819 - Voltage Regulator
  - [datasheet](./spx3819.pdf) [external links: [datasheet](https://jlcpcb.com/partdetail/Maxlinear-SPX3819M5_L_3_3TR/C9055)]
  - LCSC Part C9055 [external links: [JLCPCB](https://jlcpcb.com/partdetail/Maxlinear-SPX3819M5_L_3_3TR/C9055)]


Connectors
==========

- USB-C, 16 pin, female
  - [datasheet](./usb-c-16-fem.pdf) [external links: [datasheet](https://datasheet.lcsc.com/lcsc/2203111830_XUNPU-TYPEC-304-ACP16_C2982555.pdf)]
  - LCSC Part C2982555 [external links: [JLCPCB](https://jlcpcb.com/partdetail/Xunpu-TYPEC_304ACP16/C2982555)]
- THD0515-24CL-SN FPC (Flexible PCB Conenctor), 24 pin
  - [datasheet](./thd0515-xxcl-xx.pdf) [external links: [datasheet](https://datasheet.lcsc.com/lcsc/1811021412_THD-THD0515-24CL-SN_C283150.pdf)]
  - LCSC Part C283150 [external links: [JLCPCB](https://jlcpcb.com/partdetail/Thd-THD0515_24CLSN/C283150)]
  
Other Projects
==============

Here are other projects, tutorials and whatnot for inspiration and ideas.

- How to add USB-C to your project [[PCBWay](https://www.pcbway.com/blog/PCB_Design_Tutorial/How_to_add_USB_C_to_your_projects.html)]
- Tiny ESP32-C3 Dev Board [[GitHub](https://github.com/01Space/ESP32-C3-0.42LCD), [schematic](https://github.com/01Space/ESP32-C3-0.42LCD/blob/main/Schematic/ESP32-C3-0.42OED%20Schematic.pdf)]
- Univeral IPS Display Breakout Board [[Hackaday](https://hackaday.io/project/168130-universal-ips-display-breakout-board/)]

Copyright
=========

All rights reserved. See each document for the owners' copyright.

These documents are mirrored here for convenience and under fair-use. Any
owner may [contact me](mailto:me@ricmoo.com) to have their datasheet removed.

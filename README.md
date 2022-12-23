Third-Party Data Sheets
=======================

Mirror of third-party data sheets and schematics for various components used and adapted for the Firefly and related projects.


Micro Controller Unit
---------------------

- ATmega328 - Arduino; 8-bit 32kb Flash, 2kb SRAM, 1kb EEPROM
  - [datasheet](./atmega328.pdf) [[external link](http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf)]
- ATmega2560 - Arduino; 8-bit, 256kb Flash, 8kb RAM, 4kb EEPROM
  - [datasheet](./atmega2560.pdf) [[external link](http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2549-8-bit-AVR-Microcontroller-ATmega640-1280-1281-2560-2561_datasheet.pdf)]
- ESP32 - Arduino; 32-bit, dual-core @240Mhz, 448kb ROM, 520kb RAM, 1kb eFuse, WiFi+BLE
  - [datasheet](./esp32.pdf) [[external link](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)]
  - [WROOM-32 module](./esp32-wroom32.pdf) 4/8/16Mb Flash [[external link](https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32_datasheet_en.pdf)]
- ESP32-C3 - RISC-V, 32-bit, single-core @160Mhz, 4Mb Flash, 400kb RAM, 4kb eFuse, WiFi+BLE, World Controller
  - [datasheet](./esp32-c3.pdf) [[external link](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf)]
  - [MINI-1 module](./esp32-c3-mini-1.pdf) [[external link](https://www.espressif.com/sites/default/files/documentation/esp32-c3-mini-1_datasheet_en.pdf)]
  - ESP32-C3-DevKitM-1 [schematic](./esp32-c3-devkitm.pdf) [[external link](https://dl.espressif.com/dl/schematics/SCH_ESP32-C3-DEVKITM-1_V1_20200915A.pdf), [summary](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/hw-reference/esp32c3/user-guide-devkitm-1.html)]
- ESP32-S3 - RISC-V, 32-bit, dual-core @240Mhz, 512K RAM, 4kb eFuse, WiFi+BLE, World Controller
  - [datasheet](./esp32-s3.pdf) [[external link](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)]
  - [MINI-1 module](./esp32-s3-mini-1.pdf) [[external link](https://www.espressif.com/sites/default/files/documentation/esp32-s3-mini-1_mini-1u_datasheet_en.pdf)]
  - ESP32-S3-DevKitM-1 [schematic](./esp32-s3-devkitm.pdf) [[external link](https://dl.espressif.com/dl/schematics/SCH_ESP32-C3-DEVKITM-1_V1_20200915A.pdf), [summary](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3/user-guide-devkitm-1.html)]


Video Drivers
-------------

- [PCD8854](./pcd8854.pdf) - 48x48 pixels, monochrome [[external link](https://www.sparkfun.com/datasheets/LCD/Monochrome/Nokia5110.pdf)]
- [SSD1306](./ssd1306.pdf) - 128x64 pixel, monochrome [[download](https://www.szmaclight.com/download/SSD1306-datasheet.html)]
- [ST7789](./st7789.pdf) - 240x240 pixel, 16-bit (RGB565) color [[external link](https://www.newhavendisplay.com/appnotes/datasheets/LCDs/ST7789V.pdf)]


Display Panels
-------------

- DM-TFT-377 - 240x240 pixel IPS Display, ST7789 driver, 12 pin
  - [datasheet](./dm-tft13-377panel.pdf) [[external link](https://cdn.shopify.com/s/files/1/0264/7629/files/DM-TFT13-377panel_Datasheet.pdf?v=1659336245), [other resources tab](https://www.displaymodule.com/products/1-3-240-x-240-ips-tft-display-module-spi)]
  - [devboard](./dm-tft13-377.pdf) [[external link](https://cdn.shopify.com/s/files/1/0264/7629/files/DM-TFT13-377_Datasheet.pdf?v=1659336245)]
- DM-TFT-377 - 240x240 pixel IPS Display, ST7789 driver, 24 pin
  - [datasheet](./zjy133t-if05.pdf) [[external link](https://cdn-shop.adafruit.com/product-files/4520/4520_C13462__________.pdf)]
  - [devboard schematic](./adafruit-tft13-breakout-schematic.png) [[external link](https://cdn-learn.adafruit.com/assets/assets/000/079/156/original/adafruit_products_1-3in_IPS_TFT_Sch.png?1565202407), [tutorial](https://cdn-learn.adafruit.com/downloads/pdf/adafruit-1-3-and-1-54-240-x-240-wide-angle-tft-lcd-displays.pdf)]


Secure Element
--------------

- ATEC806A - Secure Element
  - [datasheet](./atec806a.pdf) [[external link](http://ww1.microchip.com/downloads/en/DeviceDoc/ATECC608A-TNGTLS-CryptoAuthentication-Data-Sheet-DS40002112B.pdf)]
  - [summary](./atecc806a-summary.pdf) [[external link](http://ww1.microchip.com/downloads/en/DeviceDoc/40001977A.pdf)]


Camera Module
-------------

- OV7670 - 640x480 pixels, 30fps
  - [datasheet](./ov7670.pdf) [[external link](https://www.voti.nl/docs/OV7670.pdf)]


Power Sub-System
----------------

- [10A45B](./10a45b.pdf) - Regulated Charge Pump DC/DC Converter
- [AMS1117](./ams1117.pdf) - Voltage Regulator
- [SPX3819](./spx3819.pdf) - Voltage Regulator


Other Projects
==============

Here are other projects for inspiration and ideas.

- Tiny ESP32-C3 Dev Board [GitHub](https://github.com/01Space/ESP32-C3-0.42LCD); [[schematic](https://github.com/01Space/ESP32-C3-0.42LCD/blob/main/Schematic/ESP32-C3-0.42OED%20Schematic.pdf)]
- Univeral IPS Display Breakout Board [Hackaday](https://hackaday.io/project/168130-universal-ips-display-breakout-board/)


Copyright
=========

All rights reserved. See each document for the owners' copyright.

These documents are mirrored here for convenience and under fair-use. Any
owner may [contact me](mailto:me@ricmoo.com) to have their datasheet removed.

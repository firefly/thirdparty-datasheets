Third-Party Data Sheets
=======================

Mirror of third-party data sheets and schematics for various
components used and adapted for the Firefly and related
projects.


Micro Controller Units
----------------------

- **ATmega2560** - *Arduino; 8-bit, 256kb Flash, 8kb RAM, 4kb EEPROM*
  - [datasheet](./mcu/atmega2560.pdf) <sup>[[external](http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2549-8-bit-AVR-Microcontroller-ATmega640-1280-1281-2560-2561_datasheet.pdf)]</sup>
- **ATmega328** - *Arduino; 8-bit 32kb Flash, 2kb SRAM, 1kb EEPROM*
  - [datasheet](./mcu/atmega328.pdf) <sup>[[external](http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf)]</sup>
- **ESP32** - *Arduino; 32-bit, dual-core @240Mhz, 448kb ROM, 520kb RAM, 1kb eFuse, WiFi+BLE*
  - [datasheet](./mcu/esp32.pdf) <sup>[[external](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)]</sup>
- **ESP32 WROOM-32 Module** - *4/8/16Mb Flash*
  - [datasheet](./mcu/esp32-wroom32.pdf) <sup>[[external](https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32_datasheet_en.pdf)]</sup>
- **ESP32-C3** - *RISC-V, 32-bit, single-core @160Mhz, 400kb RAM, 4kb eFuse, WiFi+BLE, World Controller*
  - [datasheet](./mcu/esp32-c3.pdf) <sup>[[external](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf)]</sup>
  - LCSC Part C2838500 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C2838500)]</sup>
- **ESP32-C3 MINI-1 Module** - *4Mb Flash*
  - [datasheet](./mcu/esp32-c3-mini-1.pdf) <sup>[[external](https://www.espressif.com/sites/default/files/documentation/esp32-c3-mini-1_datasheet_en.pdf)]</sup>
  - [DevKitM-1 schematic](./mcu/esp32-c3-devkitm.pdf) <sup>[[external](https://dl.espressif.com/dl/schematics/SCH_ESP32-C3-DEVKITM-1_V1_20200915A.pdf)]</sup>
  - DevKitM-1 summary <sup>[[external](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/hw-reference/esp32c3/user-guide-devkitm-1.html)]</sup>
  - LCSC Part C2838502 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C2838502)]</sup>
- **ESP32-S3** - *XTensa, 32-bit, dual-core @240Mhz, 512K RAM, 4kb eFuse, WiFi+BLE, World Controller*
  - [datasheet](./mcu/esp32-s3.pdf) <sup>[[external](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)]</sup>
- **ESP32-S3 MINI-1 Module** - *Module*
  - [datasheet](./mcu/esp32-s3-mini-1.pdf) <sup>[[external](https://www.espressif.com/sites/default/files/documentation/esp32-s3-mini-1_mini-1u_datasheet_en.pdf)]</sup>
  - [DevKitM schematic](./mcu/esp32-s3-devkitm.pdf) <sup>[[external](https://dl.espressif.com/dl/schematics/SCH_ESP32-C3-DEVKITM-1_V1_20200915A.pdf)]</sup>
  - DevKitM summary <sup>[[external](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3/user-guide-devkitm-1.html)]</sup>


Video Drivers
-------------

- **PCD8854** - *48x48 pixels, monochrome*
  - [datasheet](./video/pcd8854.pdf) <sup>[[external](https://www.sparkfun.com/datasheets/LCD/Monochrome/Nokia5110.pdf)]</sup>
- **SSD1306** - *128x64 pixel, monochrome*
  - [datasheet](./video/ssd1306.pdf) <sup>[[external](https://www.szmaclight.com/download/SSD1306-datasheet.html)]</sup>
- **ST7789** - *240x240 pixel, 16-bit (RGB565) color*
  - [datasheet](./video/st7789.pdf) <sup>[[external](https://www.newhavendisplay.com/appnotes/datasheets/LCDs/ST7789V.pdf)]</sup>


Displays
--------

- **DM-TFT-377** - *240x240 pixel IPS Display, ST7789 driver, 12 pin (welded)*
  - [datasheet](./display/dm-tft13-377panel.pdf) <sup>[[external](https://cdn.shopify.com/s/files/1/0264/7629/files/DM-TFT13-377panel_Datasheet.pdf?v=1659336245)]</sup>
  - other resources <sup>[[external](https://www.displaymodule.com/products/1-3-240-x-240-ips-tft-display-module-spi)]</sup>
  - [Devboard](./display/dm-tft13-377.pdf) <sup>[[external](https://cdn.shopify.com/s/files/1/0264/7629/files/DM-TFT13-377_Datasheet.pdf?v=1659336245)]</sup>
- **DM-TFT-377** - *240x240 pixel IPS Display, ST7789 driver, 24 pin (plug-in)*
  - [datasheet](./display/zjy133t-if05.pdf) <sup>[[external](https://cdn-shop.adafruit.com/product-files/4520/4520_C13462__________.pdf)]</sup>
  - [devboard schematic](./display/adafruit-tft13-breakout-schematic.png)
  - devboard <sup>[[external](https://cdn-learn.adafruit.com/assets/assets/000/079/156/original/adafruit_products_1-3in_IPS_TFT_Sch.png?1565202407)]</sup>
  - tutorial <sup>[[external](https://cdn-learn.adafruit.com/downloads/pdf/adafruit-1-3-and-1-54-240-x-240-wide-angle-tft-lcd-displays.pdf)]</sup>
- **WS2812B-2020** - *Addressable LED*
  - [datasheet](./display/ws2812b-2020.pdf) <sup>[[external](http://www.world-semi.com/solution/details-140-4.html)]</sup>
- **WS2812C-2020-V1** - *Addressable LED*
  - [datasheet](./display/ws2812c-2020.pdf) <sup>[[external](https://cdn.sparkfun.com/assets/7/0/3/c/9/WS2812C-2020.pdf)]</sup>
  - LCSC Part C2976072 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C2976072)]</sup>


Storage
-------

- **W25Q128JVSIQ** - *128 Mbit (16Mb) NOR Flash*
  - [datasheet](./storage/w25q128jv.pdf) <sup>[[external](https://datasheet.lcsc.com/lcsc/1811142111_Winbond-Elec-W25Q128JVSIQ_C97521.pdf)]</sup>
  - LCSC Part C97521 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C97521)]</sup>


Power
-----

- **10A45B** - *Regulated Charge Pump DC/DC Converter*
  - [datasheet](./power/10a45b.pdf)
- **AMS1117** - *Voltage Regulator*
  - [datasheet](./power/ams1117.pdf) <sup>[[external](https://datasheet.lcsc.com/lcsc/1811142212_Advanced-Monolithic-Systems-AMS1117-3-3_C6186.pdf)]</sup>
  - LCSC Part C6186 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C6186)]</sup>
- **SPX3819** - *Voltage Regulator*
  - [datasheet](./power/spx3819.pdf) <sup>[[external](https://jlcpcb.com/partdetail/Maxlinear-SPX3819M5_L_3_3TR/C9055)]</sup>
  - LCSC Part C9055 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C9055)]</sup>
- **TPSPX3819** - *Voltage Regulator (pin-compatible to SPX3819)*
  - [datasheet](./power/tpspx3819.pdf) <sup>[[external](https://datasheet.lcsc.com/lcsc/2303140930_TECH-PUBLIC-TPSPX3819M5-L-3-3_C5370980.pdf)]</sup>
  - LCSC Part C5370980 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C5370980)]</sup>


Connectors
----------

- **AFC01-S24FCA-00** - *Clamshell, FPC (Flexible PCB Conenctor), 24 pin*
  - [datasheet](./conn/afc01-s24fca-00.pdf) <sup>[[external](https://wmsc.lcsc.com/wmsc/upload/file/pdf/v2/lcsc/2304140030_JUSHUO-AFC01-S24FCA-00_C262669.pdf)]</sup>
  - LCSC Part C262669 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C262669)]</sup>
- **THD0515-24CL-SN** - *FPC (Flexible PCB Conenctor), 24 pin*
  - [datasheet](./conn/thd0515-xxcl-xx.pdf) <sup>[[external](https://datasheet.lcsc.com/lcsc/1811021412_THD-THD0515-24CL-SN_C283150.pdf)]</sup>
  - LCSC Part C283150 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C283150)]</sup>
- **USB-C** - *16 pin, female*
  - [datasheet](./conn/usb-c-16-fem.pdf) <sup>[[external](https://datasheet.lcsc.com/lcsc/2203111830_XUNPU-TYPEC-304-ACP16_C2982555.pdf)]</sup>
  - LCSC Part C2982555 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C2982555)]</sup>
- **USB-C** - *16 pin, female, board sink*
  - [datasheet](./conn/usb-c-15-fem-sink.pdf) <sup>[[external](https://datasheet.lcsc.com/lcsc/2110191030_SHOU-HAN-TYPE-C-16P-CB0-8-073_C2906289.pdf)]</sup>
  - LCSC Part C2906289 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C2906289)]</sup>


Other Components
----------------

- **74LVC1T45** - *Single-bit dual-power supply translating transceiver (level shifter)*
  - [datasheet](./misc/74lvc1t45.pdf) <sup>[[external](https://wmsc.lcsc.com/wmsc/upload/file/pdf/v2/lcsc/1811151525_Diodes-Incorporated-74LVC1T45W6-7_C168856.pdf)]</sup>
  - LCSC Part C168856 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C168856)]</sup>
- **ATEC806A** - *Secure Element*
  - [datasheet](./misc/atec806a.pdf) <sup>[[external](http://ww1.microchip.com/downloads/en/DeviceDoc/ATECC608A-TNGTLS-CryptoAuthentication-Data-Sheet-DS40002112B.pdf)]</sup>
  - [summary](./misc/atec806a-summary.pdf) <sup>[[external](http://ww1.microchip.com/downloads/en/DeviceDoc/40001977A.pdf)]</sup>
- **Button** - *Oval*
  - [datasheet](./misc/button-oval.pdf) <sup>[[external](https://wmsc.lcsc.com/wmsc/upload/file/pdf/v2/lcsc/1811151525_Diodes-Incorporated-74LVC1T45W6-7_C168856.pdf)]</sup>
  - LCSC Part C720479 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C720479)]</sup>
- **FA-20h** - *40Mhz Oscillator Crystal*
  - [datasheet](./misc/fa-20h.pdf) <sup>[[external](https://support.epson.biz/td/api/doc_check.php?dl=brief_FA-20H&lang=en)]</sup>
  - Epson website <sup>[[external](https://www5.epsondevice.com/en/products/crystal_unit/fa20h.html)]</sup>
  - LCSC Part C255973 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C255973)]</sup>
- **K2C400000910** - *40Mhz Oscillator Crystal; SMD2520-4P*
  - [datasheet](./misc/k2c400000910.pdf) <sup>[[external](https://wmsc.lcsc.com/wmsc/upload/file/pdf/v2/lcsc/1912111437_KYX-K2C400000910_C409424.pdf)]</sup>
  - LCSC Part C409424 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C409424)]</sup>
- **OV7670** - *Camera Module, 640x480 pixels, 30fps*
  - [datasheet](./misc/ov7670.pdf) <sup>[[external](https://www.voti.nl/docs/OV7670.pdf)]</sup>
- **USBLC6-2P6** - *Low Capacitance TVS Diode Array (ESD); SOT-666*
  - [datasheet](./misc/usblc6-2p6.pdf) <sup>[[external](https://wmsc.lcsc.com/wmsc/upload/file/pdf/v2/lcsc/2108132230_TECH-PUBLIC-USBLC6-2P6_C2827693.pdf)]</sup>
  - LCSC Part C2827693 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C2827693)]</sup>
- **USBLC6-2SC6** - *Low Capacitance TVS Diode Array (ESD); SOT-23*
  - [datasheet](./misc/usblc6-2sc6.pdf) <sup>[[external](https://datasheet.lcsc.com/lcsc/2108132230_TECH-PUBLIC-USBLC6-2SC6_C2827654.pdf)]</sup>
  - LCSC Part C2827654 <sup>[[JLCPCB](https://jlcpcb.com/partdetail/C2827654)]</sup>


Other Projects
==============

Here are other projects, tutorials and whatnot for inspiration and ideas.

- How to add USB-C to your project [[PCBWay](https://www.pcbway.com/blog/PCB_Design_Tutorial/How_to_add_USB_C_to_your_projects.html)]
- Tiny ESP32-C3 Dev Board [[GitHub](https://github.com/01Space/ESP32-C3-0.42LCD), [schematic](https://github.com/01Space/ESP32-C3-0.42LCD/blob/main/Schematic/ESP32-C3-0.42OED%20Schematic.pdf)]
- Univeral IPS Display Breakout Board [[Hackaday](https://hackaday.io/project/168130-universal-ips-display-breakout-board/)]
- ESP32 + PCB Antenna Hardware Design Tutorial [[YouTube](https://www.youtube.com/watch?v=yxU_Kw2de08), [GitHub](https://github.com/pms67/ESP32-USB-Dongle)]


Contributing
============

This README is automatically generated, **do not modify it manually**.

Add the necessary information to the `_data.json` and run
`node _create-index.mjs` to re-build this page.


Copyright
=========

All rights reserved. See each document for the owners' copyright.

These documents are mirrored here for convenience and under fair-use. Any
owner may [contact me](mailto:me@ricmoo.com) to have their datasheet removed.
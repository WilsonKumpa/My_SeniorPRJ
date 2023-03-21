# My_SeniorPRJ
ลำดับการใช้งาน
1.ให้Create react app ก่อนและติดตั้ง libraryดังนี้
├── axios@1.2.1
├── bindings@1.5.0 extraneous
├── ethers@5.5.1
├── file-uri-to-path@1.0.0 extraneous
├── nan@2.15.0 extraneous
├── node-fetch@3.3.1
├── react-dom@17.0.2
├── react-router-dom@6.8.1
├── react-scripts@4.0.3
├── react@17.0.2
├── web-vitals@1.1.2
└── web3@1.8.2
2.เชื่อมต่อกับRpiแล้วเปิดthornyและใส่code.py
3.Run .py จะได้ Flask ส่งข้อมูลไปให้ web app (.js)
.py มีlibraryดังนี้
Adafruit-Blinka==8.16.1
adafruit-circuitpython-busdevice==5.2.3
adafruit-circuitpython-dht==3.7.8
adafruit-circuitpython-requests==1.12.12
adafruit-circuitpython-typing==1.8.3
Adafruit-DHT==1.4.0
Adafruit-PlatformDetect==3.39.0
Adafruit-PureIO==1.1.9
aiohttp==3.8.4
aiosignal==1.3.1
arandr==0.1.10
astroid==2.5.1
asttokens==2.0.4
async-timeout==4.0.2
attrs==22.2.0
automationhat==0.2.0
base58==2.1.1
beautifulsoup4==4.9.3
bitarray==2.7.2
blinker==1.4
blinkt==0.1.2
buttonshim==0.0.2
Cap1xxx==0.1.3
certifi==2020.6.20
chardet==4.0.0
charset-normalizer==3.0.1
click==8.1.3
colorama==0.4.4
colorzero==1.1
cryptography==3.3.2
cupshelpers==1.0
cytoolz==0.12.1
dbus-python==1.2.16
distro==1.5.0
docutils==0.16
drumhat==0.1.0
envirophat==1.0.0
eth-abi==2.2.0
eth-account==0.5.9
eth-hash==0.5.1
eth-keyfile==0.5.1
eth-keys==0.3.4
eth-rlp==0.2.1
eth-typing==2.3.0
eth-utils==1.9.5
ExplorerHAT==0.4.2
Flask==2.2.3
fourletterphat==0.1.0
frozenlist==1.3.3
gpiozero==1.6.2
hexbytes==0.3.0
html5lib==1.1
idna==2.10
importlib-metadata==6.0.0
ipfshttpclient==0.8.0a2
isort==5.6.4
itsdangerous==2.1.2
jedi==0.18.0
Jinja2==3.1.2
jsonschema==4.17.3
lazy-object-proxy==0.0.0
logilab-common==1.8.1
lru-dict==1.1.8
lxml==4.6.3
MarkupSafe==2.1.2
mccabe==0.6.1
microdotphat==0.2.1
mote==0.0.4
motephat==0.0.3
multiaddr==0.0.9
multidict==6.0.4
mypy==0.812
mypy-extensions==0.4.3
netaddr==0.8.0
numpy==1.19.5
oauthlib==3.1.0
pantilthat==0.0.7
parsimonious==0.8.1
parso==0.8.1
pexpect==4.8.0
pgzero==1.2
phatbeat==0.1.1
pianohat==0.1.0
picamera==1.13
picamera2==0.3.8
pidng==4.0.9
piexif==1.1.3
piglow==1.2.5
pigpio==1.78
Pillow==8.1.2
protobuf==3.19.5
psutil==5.8.0
pycairo==1.16.2
pycryptodome==3.17
pycups==2.0.1
pyftdi==0.54.0
pygame==1.9.6
Pygments==2.7.1
PyGObject==3.38.0
pyinotify==0.9.6
PyJWT==1.7.1
pylint==2.7.2
PyOpenGL==3.1.5
pyOpenSSL==20.0.1
PyQt5==5.15.2
PyQt5-sip==12.8.1
pyrsistent==0.19.3
pyserial==3.5b0
pysmbc==1.0.23
python-apt==2.2.1
python-prctl==1.7
pyusb==1.2.1
rainbowhat==0.1.0
reportlab==3.5.59
requests==2.25.1
requests-oauthlib==1.0.0
responses==0.12.1
rlp==2.0.1
roman==2.0.0
rpi-ws281x==4.3.4
RPi.GPIO==0.7.0
RTIMULib==7.2.1
scrollphat==0.0.7
scrollphathd==1.2.1
Send2Trash==1.6.0b1
sense-hat==2.4.0
simplejpeg==1.6.4
simplejson==3.17.2
six==1.16.0
skywriter==0.0.7
sn3218==1.2.7
soupsieve==2.2.1
spidev==3.5
ssh-import-id==5.10
sysv-ipc==1.1.0
thonny==4.0.1
toml==0.10.1
toolz==0.12.0
touchphat==0.0.1
twython==3.8.2
typed-ast==1.4.2
typing_extensions==4.4.0
unicornhathd==0.0.4
urllib3==1.26.5
v4l2-python3==0.3.1
varint==1.0.2
web3==5.31.3
webencodings==0.5.1
websockets==9.1
Werkzeug==2.2.3
wrapt==1.12.1
yarl==1.8.2
zipp==3.13.0

4.เปิด remix.ide บนbrowserและใส่Code.solเพื่อ deploy โดยแยกของแต่ละอัน
5.นำCode.jsมาใส่ใน react app และเปลี่ยนค่าต่างๆ เช่น abi ให้เป็นตามที่เราdeploy , rpi ip address เพื่อรับข้อมูลจาก flask
6.npm start 


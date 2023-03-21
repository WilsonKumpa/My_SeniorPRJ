import time
import adafruit_dht
from flask import Flask, jsonify
from web3 import Web3
import RPi.GPIO as GPIO
import board

w3 = Web3(Web3.HTTPProvider(
    "https://goerli.infura.io/v3/..."))  # Infura API keys ของเรา (ต้องไปสมัครก่อน)
contract_address = '0x...' #Contract address หลังจาก Deploy SmartContract
contract_abi = [...] #Contract ABI ของเรา มีให้ Copy ใน Remix.IDE

contract = w3.eth.contract(address=contract_address, abi=contract_abi)

GPIO.setmode(GPIO.BCM)
GPIO.setup(a, GPIO.OUT) # PIN GPIO motor
GPIO.setup(b, GPIO.OUT) # PIN GPIO motor
z = z #PIN GPIO ของ sensor
GPIO.setup(z, GPIO.IN)
dht_sensor = adafruit_dht.DHT22(z)  # change to correct pin number

app = Flask(__name__)


@app.route('/')
def index():
    # initialize variables
    t = None
    h = None
    k = None
    try:
        u = contract.functions.ZZZ().call() #เรียก function ใน smartcontract
        v = contract.functions.WWW().call()  
        t = dht_sensor.temperature
        h = dht_sensor.humidity
    except Exception as e:
        print("Error reading DHT sensor: ", e)
    # check if t and h are valid

    if (t is not None and h is not None) and not u:
        # check if t and h values are within range
        arr = ["Temp: {} C".format(t), "Humid: {}".format(h), "SmartContractState: {}".format(v)]
        if t > 30 or h < 70:  
            GPIO.output(a, False)
            GPIO.output(b, True)
            time.sleep(2)
            GPIO.output(a, False)
            GPIO.output(b, False)
        else:  
            GPIO.output(a, True)
            GPIO.output(b, False)
            time.sleep(2)
            GPIO.output(a, False)
            GPIO.output(b, False)
    else:
        arr = ["Temp: {} C".format(t), "Humid: {}".format(h), "SmartContractState: {}".format(v)]
        if not v:  
            GPIO.output(a, False)
            GPIO.output(b, True)
            time.sleep(2)
            GPIO.output(a, False)
            GPIO.output(b, False)
        elif v:  
            GPIO.output(a, True)
            GPIO.output(b, False)
            time.sleep(2)
            GPIO.output(a, False)
            GPIO.output(b, False)
    print("UserControl:{}".format(u), "WindowState:{}".format(v))
    print(arr)
    return jsonify(arr)

if __name__ == '__main__':
    while True:
        app.run(host='0.0.0.0')
        time.sleep(4)








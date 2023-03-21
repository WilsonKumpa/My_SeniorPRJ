// SPDX-License-Identifier: GPL-3.0
//smart contract ส่วนสลับค่าตัวแปรเพื่อเปลี่ยนรูปแบบการควบคุมมอเตอร์
pragma solidity ^0.8.0;

contract Toggle {
    bool public isOn = false;
    bool public isUser = false;

    function toggle() public {
        isOn = !isOn;
    }

    function toggle2() public {
        isUser = !isUser;
    }
}

////////////////////////////////////////////////////////////

// SPDX-License-Identifier: GPL-3.0
//smart contract ส่วนบันทึกค่าลงบนบล็อกเชน
pragma solidity ^0.6.4;


contract Storage {
    
    
    string public storedData;
    
    event myEventTest(string eventOutput);
    
    function set(string memory myText) public {
        storedData = myText;
        emit myEventTest(myText);
    }
    
    function get() public view returns (string memory) {
        return storedData;
    }
    
}

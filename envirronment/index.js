/* eslint-disable */

//global LEX ENV
/* 
{
    enviromentRecord: {
        'message': 'test',
        'weight':55,
        run: {
  console.log('RUN');
},
    }
    outerLexicalEnv: null
    
}

//createMaessanger LEX ENV
{
    enviromentRecord: {
        message: hello
        sender
        functions
},
    }
    outerLexicalEnv: global
    
}

//createMaessanger2 LEX ENV
{
    enviromentRecord: {
        message,
        sender
        functions
},
    }
    outerLexicalEnv: global
    
}

//setMessage LEX ENV
{
    enviromentRecord: 
    text:hello ,
    }
    outerLexicalEnv: createMessanger1
}


*/
const message = 'Test';
const weight = 55;

for () {
    const weight = 77;
    console.log(weight);
}

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
messanger.setMessage('Hello');
const messanger2 = createMessenger();

run();

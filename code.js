const dddEstado = [
  {
    Estado: 'SP',
    ddd: ['11', '12', '13', '14', '15', '16', '17', '18', '19'],
  },
  {
    Estado: 'ES',
    ddd: ['27', '28'],
  },
  {
    Estado: 'RJ',
    ddd: ['21', '22', '24'],
  },
  {
    Estado: 'MG',
    ddd: ['31', '32', '33', '34', '35', '37', '38'],
  },
  {
    Estado: 'PR',
    ddd: ['41', '42', '43', '44', '45', '46'],
  },
  {
    Estado: 'SC',
    ddd: ['47', '48', '49'],
  },
  {
    Estado: 'RS',
    ddd: ['51', '53', '54', '55'],
  },
  {
    Estado: 'DF',
    ddd: ['61'],
  },
  {
    Estado: 'TO',
    ddd: ['63'],
  },
  {
    Estado: 'BA',
    ddd: ['71', '73', '74', '75', '77'],
  },
  {
    Estado: 'CE',
    ddd: ['85', '88'],
  },
  {
    Estado: 'MS',
    ddd: ['67'],
  },
  {
    Estado: 'MT',
    ddd: ['65', '66'],
  },
  {
    Estado: 'GO',
    ddd: ['62', '64'],
  },
  {
    Estado: 'AC',
    ddd: ['68'],
  },
  {
    Estado: 'RO',
    ddd: ['69'],
  },
  {
    Estado: 'AL',
    ddd: ['82'],
  },
  {
    Estado: 'AP',
    ddd: ['96'],
  },
  {
    Estado: 'AM',
    ddd: ['92', '97'],
  },
  {
    Estado: 'PA',
    ddd: ['91', '93', '94'],
  },
  {
    Estado: 'RR',
    ddd: ['95'],
  },
  {
    Estado: 'MA',
    ddd: ['98', '99'],
  },
  {
    Estado: 'PB',
    ddd: ['83'],
  },
  {
    Estado: 'PE',
    ddd: ['81', '87'],
  },
  {
    Estado: 'PI',
    ddd: ['86', '89'],
  },
  {
    Estado: 'RN',
    ddd: ['84'],
  },
  {
    Estado: 'SE',
    ddd: ['79'],
  },
];
var results = [];
num = 5511999999999;
num = num.toString();
if (typeof num !== 'undefined' && num) {
  if (num.startsWith('55'));
  {
    var substring = num.substr(2, 2);
    for (var i = 0; i < dddEstado.length; i++) {
      for (var key in dddEstado[i]) {
        if (dddEstado[i][key].indexOf(substring) != -1) {
          results.push(dddEstado[i]);
          var estado = Object.values(results[0].Estado.valueOf().trim());
          var estadoLimpo = estado.toString().replace(',', '');
          console.log(`Pelo seu DDD, você é de *${estadoLimpo}*, certo?`);
          //result.buttonsBuilder().text('Essa informação está certa?')
          //.quickReplies() // marks the button so it's showed as pills
          //.addButton('click me', 'rule with name XX') // when user clicks it will fire the rule named XX
          //.send(); // send must by always called to finalize
        }
      }
    }
  } 
}

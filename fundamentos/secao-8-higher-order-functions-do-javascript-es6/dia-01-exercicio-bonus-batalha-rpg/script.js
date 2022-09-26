const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Função para gerar o dano do dragão entre 15 e o strength
const damageDragon = () => {
  return Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
};

// Função para gerar o dano do warrior entre strength e strength * weaponDmg
const damageWarrior = () => {
  return Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) + warrior.strength);
};

// Função que retorna um objeto com dois valores, sendo o primeiro o dano e o segundo a mana gasta
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 
const objectDamageMage = () => {
  return {
    damage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence),
    manaConsumed: 15,
  }
};

// Receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.
const warriorVsDragon = (damageWarrior) => {
  dragon.healthPoints -= damageWarrior();
  if (warrior.damage !== undefined) {
    warrior.damage += damageWarrior();
  }
  else {
    warrior.damage = 0;
    warrior.damage += damageWarrior();
  }
}

// Receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.
const mageVsDragon = (damageMage) => {
  dragon.healthPoints -= damageMage().damage;
  mage.mana -= damageMage().manaConsumed;
  if (mage.damage !== undefined) {
    mage.damage += damageMage().damage;
  }
  else {
    mage.damage = 0;
    mage.damage += damageMage().damage;
  }
}

// Receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro.
const dragonVsAll = (damageDragon) => {
  mage.healthPoints -= damageDragon();
  warrior.healthPoints -= damageDragon();
  if (dragon.damage !== undefined) {
    dragon.damage += damageDragon();
  }
  else {
    dragon.damage = 0;
    dragon.damage += damageDragon();
  }
}

// Retorna as estatitiscas de cada membro
const statisc = (battleMembers) => {console.log(battleMembers)};

// Chama o objeto que gera a luta
const gameActions = {
  warriorTurn: warriorVsDragon(damageWarrior),
  mageTurn: mageVsDragon(objectDamageMage),
  dragonTurn: dragonVsAll(damageDragon),
  inf: statisc(battleMembers),
};
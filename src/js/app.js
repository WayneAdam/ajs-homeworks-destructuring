const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
    }
  ]	
};

export default function showAllowedAttack(obj) {
  const result = [];
  const { special } = obj;

  if (!special) {
    return [];
  }

  for (let i = 0; i < special.length; i++) {
    if (!special[i].description) {
      special[i].description = 'Описание недоступно';
    }

    result.push({
      id: special[i].id,
      name: special[i].name,
      icon: special[i].icon,
      description: special[i].description,
    });
  }

  return result;
}

console.log(showAllowedAttack(character));

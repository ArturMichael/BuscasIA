function fillKnapsack(objects, maxWeight) {
    // Ordena os objetos em ordem decrescente de valor por peso
    objects.sort((a, b) => b.value / b.weight - a.value / a.weight);
  
    let totalValue = 0;
    let currentWeight = 0;
    const selectedObjects = [];
  
    // Itera sobre os objetos e seleciona os que cabem na mochila
    for (const obj of objects) {
        if (currentWeight + obj.weight <= maxWeight) {
            selectedObjects.push(obj);
            totalValue += obj.value;
            currentWeight += obj.weight;
        }
    }
  
    return {
        selectedObjects: selectedObjects,
        totalValue: totalValue
    };
  }
  
  // Exemplo de uso
  const objects = [
    { weight: 2, value: 10 },
    { weight: 3, value: 5 },
    { weight: 5, value: 15 },
    { weight: 7, value: 7 },
    { weight: 1, value: 6 }
  ];
  const maxWeight = 10;
  
  const result = fillKnapsack(objects, maxWeight);
  console.log("Objetos selecionados:", result.selectedObjects);
  console.log("Valor total:", result.totalValue);

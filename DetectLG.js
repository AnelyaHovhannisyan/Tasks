function doTask() {
  // Task 1
  // 0000..007F; English
  // 0530..058F; Armenian
  // 0400..04FF; Russian
  // detect();

  // const arr = ["Տուն", "Дом", "Home", "Hello", "Солнце", "Լուսին"];
  const word = prompt();
  const array = [word];

  detect(array);
}

function detect(array) {
  const languages = {
    english: /[\u0000-\u007F]+/g,
    russian: /[\u0400-\u04FF]+/g,
    armenian: /[\u0530-\u058F]+/g
  };

  for (let i = 0; i < array.length; i += 1) {
    let english = "";
    let russian = "";
    let armenian = "";

    const word = array[i];

    for (let j = 0; j < word.length; j += 1) {
      if (word[j].match(languages.english)) {
        english += word[j].match(languages.english);
      }
      if (word[j].match(languages.russian)) {
        russian += word[j].match(languages.russian);
      }
      if (word[j].match(languages.armenian)) {
        armenian += word[j].match(languages.armenian);
      }
    }

    if (english.length === word.length) {
      console.warn("English : ", english);
    }

    if (russian.length === word.length) {
      console.warn("Russian : ", russian);
    }

    if (armenian.length === word.length) {
      console.warn("Armenian : ", armenian);
    }
  }
}



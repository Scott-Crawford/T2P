var list = JSON.parse(window.localStorage.getItem('pharses') || '["PITT"]');
var phraseListDiv = document.querySelector('#phrase-list');

function saveList() {
  window.localStorage.setItem('pharses', JSON.stringify(list));
  chrome.tabs.query({}, function(tabs) {
    var message = {command: "update-phrases", phrases: list};
    for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, message);
    }
	});
}

function removePhrase(e) {
  var phraseDiv = e.target.closest('.phrase');
  list.splice(phraseDiv.dataset.index, 1);
  phraseDiv.parentNode.removeChild(phraseDiv);
  saveList();
}

function createPhraseNode(index, text) {
  var phraseDiv = document.createElement('DIV');
  phraseDiv.dataset.index = index;
  phraseDiv.textContent = text;
  phraseDiv.className = 'phrase';
  var removeBtn = document.createElement('DIV');
  removeBtn.textContent = 'X';
  removeBtn.onclick = removePhrase;
  phraseDiv.appendChild(removeBtn);
  return phraseDiv;
}

for (var i = 0; i < list.length; i++) {
  phraseListDiv.appendChild(createPhraseNode(i, list[i]));
}

var newPhraseDiv = document.createElement('DIV');
newPhraseDiv.className = 'add';
var newPhraseInput = document.createElement('INPUT');
var addBtn = document.createElement('DIV');
addBtn.textContent = '+';
addBtn.onclick = function() {
  if (!newPhraseInput.value.length) return;
  var phraseText = newPhraseInput.value,
    phraseDiv = createPhraseNode(list.length, phraseText);
  list.push(phraseText);
  phraseListDiv.insertBefore(phraseDiv, newPhraseDiv);
  newPhraseInput.value = '';
  saveList();
};
newPhraseDiv.appendChild(newPhraseInput);
newPhraseDiv.appendChild(addBtn);
phraseListDiv.appendChild(newPhraseDiv);

newPhraseInput.focus();
saveList();

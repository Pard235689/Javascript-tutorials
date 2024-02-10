var request = new XMLHttpRequest();

request.open('GET', 'https://private-anon-a8c9047f63-mailtrap.apiary-mock.com/api/v1/companies');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
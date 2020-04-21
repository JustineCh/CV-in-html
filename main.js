function getJson() {
   fetch('personal-data.json')
   .then(function(res){
      return res.json();
   })
   .then(function(data){
      console.log(data)
      document.getElementById('address').innerHTML = `<a href="${data.address_href}" target="_blank">${data.address}</a>`
      document.getElementById('phone').innerHTML = `<a href="${data.phone_href}" target="_blank">${data.phone}</a>`
      document.getElementById('email').innerHTML = `<a href="${data.email_href}" target="_blank">${data.email}</a>`
   })
}

getJson();
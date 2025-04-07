function showInfo(title, price, oldPrice) {
    document.getElementById('infoTitle').innerText = title;
    document.getElementById('infoPrice').innerText = "Price: " + price;
    document.getElementById('infoOldPrice').innerText = oldPrice;
    document.getElementById('infoBox').style.display = 'block';
  }
  
  function closeInfo() {
    document.getElementById('infoBox').style.display = 'none';
  }
  
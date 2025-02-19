function calcular(){
    const producto1 = parseFloat(document.getElementById('producto1').value) || 0;
    const producto2 = parseFloat(document.getElementById('producto2').value) || 0;
    const producto3 = parseFloat(document.getElementById('producto3').value) || 0;
    const producto4 = parseFloat(document.getElementById('producto4').value) || 0;
    const producto5 = parseFloat(document.getElementById('producto5').value) || 0;

    const subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
    document.getElementById('subtotal').value = subtotal.toFixed(2);

    let descuento = 0;
    if (subtotal >= 1000 && subtotal < 5000) {
        descuento = 0.10;
    } else if (subtotal >= 5000 && subtotal < 9000) {
        descuento = 0.20;
    } else if (subtotal >= 9000 && subtotal < 13000) {
        descuento = 0.30;
    } else if (subtotal >= 13000) {
        descuento = 0.40;
    }

    const total = subtotal - (subtotal * descuento);
    document.getElementById('total').value = total.toFixed(2);
    document.getElementById('descuentoLabel').innerText = `Descuento ${(descuento * 100).toFixed(0)}%`;
}

function limpiar(){
    document.getElementById('producto1').value = '';
    document.getElementById('producto2').value = '';
    document.getElementById('producto3').value = '';
    document.getElementById('producto4').value = '';
    document.getElementById('producto5').value = '';
    document.getElementById('subtotal').value = '';
    document.getElementById('total').value = '';
    document.getElementById('descuentoLabel').innerText = '';
}
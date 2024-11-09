document.querySelector('.map-image').addEventListener('mousemove', function (event) {
    const popup = document.getElementById('booth-info');
    popup.style.left = event.pageX + 'px';
    popup.style.top = event.pageY + 'px';
    popup.style.display = 'block';
    popup.textContent = "Thông tin gian hàng"; // Thay đổi nội dung dựa trên gian hàng
});

document.querySelector('.map-image').addEventListener('mouseleave', function () {
    const popup = document.getElementById('booth-info');
    popup.style.display = 'none';
});

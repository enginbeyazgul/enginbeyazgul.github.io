$(document).ready(function(){
    $('.menu').click(function(){
        $('.mobile-menu').toggleClass("active");
        $('.menu').toggle();
        $('.menu2').toggle();
    });
    $('.menu2').click(function(){
        $('.mobile-menu').toggleClass("active");
        $('.menu').toggle();
        $('.menu2').toggle();
    });
    $(document).click(function(e){
        if ($('.mobile-menu').hasClass('active')){
            if ($(e.target).closest('.mobile-menu, .menu, .menu2').length === 0){
                $('.mobile-menu').removeClass('active');
                $('.menu').show();
                $('.menu2').hide();
            }
        }
    });
    $('.mobile-menu').on('click', 'a', function(){
        if ($('.mobile-menu').hasClass('active')){
            $('.mobile-menu').removeClass('active');
            $('.menu').show();
            $('.menu2').hide();
        }
    });
}); 
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { 
        threshold: 0.2 
    });
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
        observer.observe(item);
    });
});
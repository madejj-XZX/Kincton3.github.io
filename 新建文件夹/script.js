// 导航栏滚动效果
const header = document.getElementById('main-header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// 视频背景自动播放（移动端兼容）
document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.play().catch(e => {
            // 自动播放被阻止时显示备用图片
            heroVideo.poster = 'assets/images/fallback-image.jpg';
            heroVideo.load();
        });
    }

    // 设置当前页面导航高亮
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
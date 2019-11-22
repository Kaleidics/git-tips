let refresh = window.localStorage.getItem('refresh');
if (refresh === null) {
    window.location.reload();
    window.localStorage.setItem('refresh', '1');
}

window.addEventListener('unload', function() {
    localStorage.removeItem('refresh');
});

document.addEventListener('DOMContentLoaded', function() {
    triggerOn('#tip_1', '#tip_1_content');
    triggerOn('#tip_2', '#tip_2_content');
    triggerOn('#tip_3', '#tip_3_content');
    triggerOn('#tip_4', '#tip_4_content');
    triggerOn('#tip_5', '#tip_5_content');
    triggerOn('#tip_6', '#tip_6_content');
});

function triggerOn(option, target) {
    const tip = document.querySelector(option);
    const tipContent = document.querySelector(target);

    tip.addEventListener('click', function() {
        tipContent.classList.toggle('hidden');
    });
}

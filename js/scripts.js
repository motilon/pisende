"use strict";
'use strict';

var MenuMateriales = function () {

    var st = {
        nav: '.nav__materiales',
        nav_item: '.nav-item',
        nav_link: '.nav-link'
    };

    var suscribeEvents = function suscribeEvents() {
        $(st.nav_link, st.nav).on('click', events.cargarMaterial);
    };

    var events = {

        cargarMaterial: function cargarMaterial(e) {
            e.preventDefault();
            self = $(this);
            $(st.nav_item, st.nav).removeClass('active');
            self.closest(st.nav_item).addClass('active');

            var material_id = self.data('material');

            alert('hizo clic en el material: ' + material_id);
        }

    };

    var initialize = function initialize() {
        suscribeEvents();
    };

    return {
        init: initialize
    };
}();

var galeria = function () {

    var st = {
        galeria: '.galeria',
        galeria_item: '.galeria__item',
        galeria_imagen: '.galeria__imagen',
        contenedor: '#imagenFondoEspacio'
    };

    var suscribeEvents = function suscribeEvents() {
        $(st.galeria_imagen, st.galeria).on('click', events.cargarImagen);
    };

    var events = {

        cargarImagen: function cargarImagen(e) {
            e.preventDefault();
            self = $(this);

            var imagen = self.data('imagen');
            $(st.contenedor).css({ 'background-image': 'url(' + imagen + ')' });
        }

    };

    var initialize = function initialize() {
        suscribeEvents();
    };

    return {
        init: initialize
    };
}();

document.addEventListener('DOMContentLoaded', function () {
    //Iniciamos WOW
    new WOW().init();
    MenuMateriales.init();
    galeria.init();
});
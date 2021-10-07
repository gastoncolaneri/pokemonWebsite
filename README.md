Cambiar los estilos de HTML y BODY para que se pueda scrollear

De:
html {
height: auto;
width: auto;
position: static;
}

body,
#svelte {
display: flex;
flex-direction: column;
height: auto;
}

A:
html {
height: auto;
width: auto;
position: static;
}

body,
#svelte {
display: flex;
flex-direction: column;
height: auto;
}

Para que funcionen bien los estilos, hay que agregar los archivos site-dark.css y site.css que están en la página de Svelte Material UI (no se instalan al igual que los otros 2 archivos css).

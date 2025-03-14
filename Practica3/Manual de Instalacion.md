# Manual de Instalación de Ubuntu y Configuración de Apache2
**Autor: Christopher Emanuel Xicay Gómez - 202100155**

## 1. Instalación de Ubuntu en Máquina Virtual

### Requisitos Previos
- **VirtualBox** instalado en tu sistema.
- **Imagen ISO** de Ubuntu descargada desde [ubuntu.com](https://ubuntu.com/download/desktop).
- Al menos **4GB de RAM** y **20GB de almacenamiento** disponibles.

### Creación de la Máquina Virtual
1. Abre **VirtualBox** y haz clic en **Nuevo**.
2. Asigna un **nombre** (Ejemplo: Ubuntu VM).
3. Selecciona **Tipo: Linux** y **Versión: Ubuntu (64-bit)**.
4. Asigna al menos **4GB de RAM**.
5. Crea un disco duro virtual de al menos **20GB (Formato VDI, tamaño dinámico)**.

### Instalación del Sistema Operativo
1. Inicia la máquina virtual y selecciona la **ISO de Ubuntu**.
2. Elige **“Instalar Ubuntu”**.
3. Selecciona el idioma y configura el teclado.
4. Selecciona **“Borrar disco e instalar Ubuntu”** (opción recomendada para VM).
5. Configura **nombre de usuario y contraseña**.
6. Espera a que la instalación termine y reinicia el sistema.

---

## 2. Configuración del Sistema y Apache2

### Actualización del Sistema
```bash
sudo apt update && sudo apt upgrade -y
```
> Actualiza los paquetes del sistema.

### Instalación del Servidor Apache2
```bash
sudo apt install apache2 -y
```
> Instala el servidor web Apache2.

### Verificar el Estado de Apache2
```bash
sudo systemctl status apache2
```
> Confirma que el servidor está activo.

### Acceder a la Página Web Predeterminada
1. Abre un navegador web.
2. Ingresa `http://localhost` en la barra de direcciones.
3. Si la instalación fue correcta, aparecerá la página de bienvenida de Apache2.

### Modificación de la Página Principal
```bash
cd /var/www/html/
sudo nano index.html
```
> Edita el archivo `index.html` con un mensaje personalizado.

Ejemplo de personalización de contenido:
```html
<html>
<head><title>Mi pagina Apache</title></head>
<body>
    <h1>Christopher Xicay - 202100155</h1>
</body>
</html>
```

### Aplicar Cambios Reiniciando Apache2
```bash
sudo systemctl restart apache2
```
> Reinicia el servicio Apache para aplicar los cambios.

---

## 3. Solución de Problemas

### Ver Permisos de Archivos
```bash
ls -l /var/www/html/
```
> Muestra los permisos de los archivos en el directorio web.

### Cambiar Permisos del Archivo `index.html`
```bash
sudo chmod 777 /var/www/html/index.html
```
> Permite la edición del archivo sin restricciones.

### Reiniciar Apache2 en Caso de Errores
```bash
sudo systemctl restart apache2
```
> Soluciona problemas de visualización tras modificar archivos.

---

**¡Listo! Ahora tienes Ubuntu instalado y Apache2 configurado correctamente.** 🚀

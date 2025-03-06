
# Manual de Comandos

## 1. Actualización de Paquetes
```bash
sudo apt update
```
> Actualiza la lista de paquetes disponibles en Ubuntu.

## 2. Instalación del Servidor Apache2
```bash
sudo apt install apache2 -y
```
> Instala el servidor web Apache2.

## 3. Verificar el Estado de Apache2
```bash
sudo systemctl status apache2
```
> Muestra el estado del servicio Apache2.

## 4. Detener Apache2
```bash
sudo systemctl stop apache2
```
> Detiene el servicio Apache2.

## 5. Reiniciar Apache2
```bash
sudo systemctl restart apache2
```
> Reinicia el servicio Apache2.

## 6. Acceder a la Página Web Predeterminada
```
http://localhost
```
> Accede a la página por defecto de Apache2 desde el navegador.

## 7. Navegar al Directorio Web de Apache2
```bash
cd /var/www/html/
```
> Cambia al directorio donde se encuentra la página web de Apache.

## 8. Listar Archivos del Directorio
```bash
ls
```
> Lista los archivos y directorios en `/var/www/html/`.

## 9. Editar el Archivo `index.html`
```bash
sudo nano index.html
```
> Abre el archivo `index.html` en el editor de texto Nano.

## 10. Guardar Cambios en Nano
1. Presiona `CTRL + X`.
2. Escribe `Y` para confirmar.
3. Presiona `Enter` para guardar los cambios.

## 11. Ver Permisos de un Archivo
```bash
ls -l /var/www/html/
```
> Muestra los permisos de los archivos en `/var/www/html/`.

## 12. Cambiar Permisos de un Archivo
```bash
sudo chmod 777 /var/www/html/index.html
```
> Otorga permisos de lectura, escritura y ejecución a `index.html`.

## 13. Reiniciar Apache tras Modificaciones
```bash
sudo systemctl restart apache2
```
> Reinicia Apache para aplicar cambios en los archivos.

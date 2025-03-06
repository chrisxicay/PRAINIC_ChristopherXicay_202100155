# Manual de Comandos

## 1. Instalación de Ubuntu
```bash
sudo apt install ubuntu-desktop -y
```
> Instala el entorno de escritorio de Ubuntu.

## 2. Revisión de Instalación
```bash
lsb_release -a
```
> Muestra información sobre la versión de Ubuntu instalada.

```bash
uname -r
```
> Muestra la versión del kernel de Linux en uso.

---

## 3. Manejo de Archivos

### Crear un Archivo
```bash
touch archivo.txt
```
> Crea un archivo vacío llamado `archivo.txt`.

### Editar un Archivo con Nano
```bash
nano archivo.txt
```
> Abre el archivo `archivo.txt` en el editor de texto Nano.

### Mover un Archivo
```bash
mv archivo.txt /ruta/destino/
```
> Mueve `archivo.txt` a otro directorio.

### Copiar un Archivo
```bash
cp archivo.txt copia_archivo.txt
```
> Copia `archivo.txt` y lo guarda como `copia_archivo.txt`.

### Eliminar un Archivo
```bash
rm archivo.txt
```
> Elimina `archivo.txt`.

### Eliminar un Directorio
```bash
rm -r directorio/
```
> Elimina un directorio y su contenido.

---

## 4. Manejo de Paquetes

### Actualizar la Lista de Paquetes
```bash
sudo apt update
```
> Actualiza la lista de paquetes disponibles en Ubuntu.

### Actualizar Todos los Paquetes Instalados
```bash
sudo apt upgrade -y
```
> Instala las actualizaciones disponibles para los paquetes instalados.

### Instalar un Paquete
```bash
sudo apt install nombre-del-paquete -y
```
> Instala un paquete especificado.

### Eliminar un Paquete
```bash
sudo apt remove nombre-del-paquete -y
```
> Desinstala un paquete del sistema.

### Eliminar un Paquete y sus Configuraciones
```bash
sudo apt purge nombre-del-paquete -y
```
> Elimina un paquete y sus archivos de configuración.

---

## 5. Instalación del Servidor Apache2
```bash
sudo apt install apache2 -y
```
> Instala el servidor web Apache2.

## 6. Verificar el Estado de Apache2
```bash
sudo systemctl status apache2
```
> Muestra el estado del servicio Apache2.

## 7. Detener Apache2
```bash
sudo systemctl stop apache2
```
> Detiene el servicio Apache2.

## 8. Reiniciar Apache2
```bash
sudo systemctl restart apache2
```
> Reinicia el servicio Apache2.

## 9. Acceder a la Página Web Predeterminada
```
http://localhost
```
> Accede a la página por defecto de Apache2 desde el navegador.

## 10. Navegar al Directorio Web de Apache2
```bash
cd /var/www/html/
```
> Cambia al directorio donde se encuentra la página web de Apache.

## 11. Listar Archivos del Directorio
```bash
ls
```
> Lista los archivos y directorios en `/var/www/html/`.

## 12. Editar el Archivo `index.html`
```bash
sudo nano index.html
```
> Abre el archivo `index.html` en el editor de texto Nano.

## 13. Guardar Cambios en Nano
1. Presiona `CTRL + X`.
2. Escribe `Y` para confirmar.
3. Presiona `Enter` para guardar los cambios.

## 14. Ver Permisos de un Archivo
```bash
ls -l /var/www/html/
```
> Muestra los permisos de los archivos en `/var/www/html/`.

## 15. Cambiar Permisos de un Archivo
```bash
sudo chmod 777 /var/www/html/index.html
```
> Otorga permisos de lectura, escritura y ejecución a `index.html`.

## 16. Reiniciar Apache tras Modificaciones
```bash
sudo systemctl restart apache2
```
> Reinicia Apache para aplicar cambios en los archivos.

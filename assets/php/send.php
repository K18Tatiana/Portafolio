<?php
$destinatario = 'tatianavegac2003@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$header = 'Enviado desde el portafolio Tatiana Vega';

$message = "Este mensaje fue enviado por: " . $name . " \n";
$message .= "Su e-mail es: " . $email . " \n";
$message .= "Mensaje: " . $subject . " \n";
$message .= "Enviado el: " . date('d/m/Y', time());

$asunto = 'Mensaje de contacto de portafolio';

mail($destinatario, $subject, $message, $header);

echo "<script>alert('Mensaje enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href="index.html"\",1000) </script>";
?>
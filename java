import java.util.ArrayList;
import java.util.List;

public class GestorConvidados {
    public static void main(String[] args) {
        List<String> convidados = List.of("Alice", "Bruno", "Amanda", "Carlos", "Arthur", "Beatriz");
        int contadorA = 0;

        System.out.println("=== PROCESSANDO LISTA ===");

        for (String nome : convidados) {
            // Imprime em maiúsculo
            System.out.println(nome.toUpperCase());

            // Conta nomes que começam com 'A'
            if (nome.toUpperCase().startsWith("A")) {
                contadorA++;
            }
        }

        System.out.println("Total de nomes com 'A': " + contadorA);
    }
}

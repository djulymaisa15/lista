import java.util.Arrays;
import java.util.List;

public class ListaVipPro {
    public static void main(String[] args) {
        List<String> convidados = Arrays.asList("Jorge", "Joaquim", "Mikaelly", "Laura", "Nicole", "Thamily");
        int contadorA = 0;

        System.out.println("--- LISTA DE CONVIDADOS (MAIÚSCULAS) ---");

        for (String nome : convidados) {
            // Imprime cada nome em LETRA MAIÚSCULA
            System.out.println(nome.toUpperCase());

            // Verifica se começa com 'A' (ou 'a')
            if (nome.toLowerCase().startsWith("a")) {
                contadorA++;
            }
        }

        System.out.println("---------------------------------------");
        System.out.println("Total de nomes que começam com 'A': " + contadorA);
    }
}

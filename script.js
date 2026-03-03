import java.util.Arrays;
import java.util.List;

public class GuestManager {
    public static void main(String[] args) {
        List<String> convidados = Arrays.asList("Amanda", "Bruno", "Arthur", "Carlos", "Alice", "Daniel", "Augusto");

        System.out.println("--- LISTA PROCESSADA ---");

        // Loop para imprimir em Maiúsculas
        convidados.forEach(nome -> System.out.println(nome.toUpperCase()));

        // Contagem de nomes que começam com 'A'
        long totalA = convidados.stream()
                                .filter(n -> n.toUpperCase().startsWith("A"))
                                .count();

        System.out.println("------------------------");
        System.out.println("Total com a letra 'A': " + totalA);
    }
}

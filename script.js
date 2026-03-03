import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

public class ListaFiltrada {
    public static void main(String[] args) {
        List<String> nomes = Arrays.asList("Jorge", "Joaquim", "Mikaelly", "Laura", "Nicole", "Thamily");
        
        System.out.println("--- NOMES COM MAIS DE 5 LETRAS ---");

        // Usando range para percorrer a lista pelo índice
        IntStream.range(0, nomes.size()).forEach(i -> {
            String nome = nomes.get(i);
            
            if (nome.length() > 5) {
                System.out.println("Índice " + i + ": " + nome.toUpperCase());
            }
        });
    }
}

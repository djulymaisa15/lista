import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

public class PetShopCheckIn {
    public static void main(String[] args) {
        List<String> pets = Arrays.asList("Jorge", "Joaquim", "Mikaelly", "Laura", "Nicole", "Thamily");
        
        System.out.println("=== RELATÓRIO PET SHOP: NOMES LONGOS ===");

        // Usando range para controlar os índices de 0 até o tamanho da lista
        IntStream.range(0, pets.size()).forEach(i -> {
            String nomePet = pets.get(i);
            
            // Filtro: apenas nomes com mais de 5 letras
            if (nomePet.length() > 5) {
                System.out.println("Senha #" + (i + 1) + ": " + nomePet.toUpperCase() + " (Processado)");
            }
        });
    }
}

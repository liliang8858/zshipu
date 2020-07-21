package mvnt1;

import io.vertx.core.Vertx;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {
        System.out.println("Hello World!");

        Vertx vertx = Vertx.vertx();
        vertx.deployVerticle( new MyVerticle());
        
    }
}

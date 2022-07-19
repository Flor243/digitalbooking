package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
   @Query( "SELECT p FROM Producto p WHERE p.categoria.id = ?1 ")
   List<Optional<Producto>> listarProductosByCategoryId(Long id);


   @Query( "SELECT p FROM Producto p WHERE p.ciudad.id = ?1 ")
   List<Optional<Producto>> listarProductosByCiudadId(Long id);


   @Query( "select p\n" +
           "from Producto p\n" +
           "where not exists (\n" +
           "    select r\n" +
           "    from Reserva r\n" +
           "    where r.producto.id = p.id\n" +
           "   AND ( (?1 BETWEEN r.fechaInicioReserva AND r.fechaFinReserva) OR \n" +
           "    (?2 BETWEEN r.fechaInicioReserva AND r.fechaFinReserva) OR \n" +
           "((r.fechaInicioReserva BETWEEN ?1 AND ?2) OR (r.fechaFinReserva BETWEEN ?1 AND ?2)))\n" +
           ")")
   List<Optional<Producto>> listarProductosByDisponibilidad(LocalDate fechaInicio, LocalDate fechaFin);


   @Query( "select p\n" +
           "from Producto p\n" +
           "where p.ciudad.id = ?3 and not exists (\n" +
           "    select r\n" +
           "    from Reserva r\n" +
           "    where r.producto.id = p.id\n" +
           "   AND ( (?1 BETWEEN r.fechaInicioReserva AND r.fechaFinReserva) OR \n" +
           "    (?2 BETWEEN r.fechaInicioReserva AND r.fechaFinReserva) OR \n" +
           "((r.fechaInicioReserva BETWEEN ?1 AND ?2) OR (r.fechaFinReserva BETWEEN ?1 AND ?2)))\n" +
           ")")
   List<Optional<Producto>> listarProductosDisponiblesByCiudadYFecha(LocalDate fechaInicio, LocalDate fechaFin, Long id_ciudad);


    @Query("SELECT p FROM Producto p INNER JOIN Reaccion r ON p.id = r.producto.id WHERE r.usuario.id = ?1 AND r.favorito = true")
   List<Optional<Producto>> listarProductosFavoritosByUsuarioId(Long id);


}

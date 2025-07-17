Object.prototype.chai = function() {
    console.log('chai');
    
}

const arr = [1,2,3]

if (!Array.prototype.fill) {
    // fallback - Polyfill backup function
    Array.prototype.fill = function() {

    }
}

arr.fill()

const str = 'Piyush'